<template>
    <ProgressView v-if="loading" />
    <section v-else>
        <div class="app_width">
            <div class="proposal_container">
                <div class="title">
                    <h3>{{ proposal.title }}</h3>
                    <p class="published">Published by <a href="">{{ proposal.owner }}</a></p>
                    <p class="summary">{{ proposal.summary }}</p>
                    <P class="created">Created on
                        {{
                                $toDate(Number(dao.proposals.get(proposalId).createdOn)).month + ',' +
                                $toDate(Number(dao.proposals.get(proposalId).createdOn)).date + ' ' +
                                $toDate(Number(dao.proposals.get(proposalId).createdOn)).hour + ':' +
                                $toDate(Number(dao.proposals.get(proposalId).createdOn)).min
                            }}
                    </P>
                </div>
            </div>

            <div class="grid_container">
                <div class="voting">
                    <div class="voting_head">
                        <h3>Voting</h3>

                        <div class="voting_head_options">
                            <p>Breakdown</p>
                            <p>Voters</p>
                        </div>
                    </div>

                    <div class="yes_vote">
                        <div class="yes_head">
                            <p>Yes</p>
                            <div class="yes_head_options">
                                <p>{{ $fromWei(getApprovesVotesCount()) }} KDD</p>
                                <p>{{ (proposal.approves.length / proposal.votes.size) * 100 }}%</p>
                            </div>
                        </div>

                        <div class="progress">
                            <div class="progress_bar"
                                :style="`width: ${(proposal.approves.length / proposal.votes.size) * 100}%;`"></div>
                        </div>
                    </div>

                    <div class="yes_vote">
                        <div class="yes_head">
                            <p>No</p>
                            <div class="yes_head_options">
                                <p>{{ getDisApprovesVotesCount() }} KDD</p>
                                <p>{{ (proposal.disapproves.length / proposal.votes.size) * 100 }}%</p>
                            </div>
                        </div>
                        <div class="progress">
                            <div class="progress_bar"
                                :style="`width: ${(proposal.disapproves.length / proposal.votes.size) * 100}%;`"></div>
                        </div>
                    </div>

                    <br> <br>

                    <div class="voting_head">
                        <h3>Amount required from treasure -> {{ $fromWei(proposal.treasureAmount) }} Æ</h3>
                    </div>

                    <br> <br>

                    <div class="proposal_info_time">
                        <IconClock />
                        <p>
                            {{
                                $toDate(Number(dao.proposals.get(proposalId).startedOn)).month + ',' +
                                $toDate(Number(dao.proposals.get(proposalId).startedOn)).date + ' ' +
                                $toDate(Number(dao.proposals.get(proposalId).startedOn)).hour + ':' +
                                $toDate(Number(dao.proposals.get(proposalId).startedOn)).min
                            }} —
                            {{
                                $toDate(Number(dao.proposals.get(proposalId).endedOn)).month + ',' +
                                $toDate(Number(dao.proposals.get(proposalId).endedOn)).date + ' ' +
                                $toDate(Number(dao.proposals.get(proposalId).endedOn)).hour + ':' +
                                $toDate(Number(dao.proposals.get(proposalId).endedOn)).min
                            }}
                        </p>
                    </div>

                    <div class="vote_actions" v-if="allocation >= dao.governance.minParticipation">
                        <button v-on:click="vote(true, false)">Vote up</button>
                        <button v-on:click="vote(false, false)">Vote down</button>
                    </div>

                    <div class="vote_actions" v-else>
                        <button v-on:click="approveToken()">Approve voting token</button>
                    </div>
                </div>

                <div class="token_container">
                    <img src="/images/token-transfer.svg" alt="">
                    <h3>Make your first deposit</h3>
                    <p>Begin by making your first treasury deposit. Learn more about managing a DAO treasury in this
                        guide.</p>
                    <button v-on:click="execute()">Execute proposal</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconClock from '../icons/IconClock.vue';
import ProgressView from './ProgressView.vue';
import { voteProposal, daoState, executeProposal, approve, allowance } from '../../scripts/aeternity';
</script>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(["aeSdk"])
    },
    data() {
        return {
            loading: true,
            dao: null,
            proposal: null,
            // eslint-disable-next-line no-undef
            proposalId: BigInt(this.$route.params.pid),
            daoMembers: null,
            allocation: 0
        };
    },
    methods: {
        getAllowance: async function () {
            const result = await allowance(
                this.aeSdk, 
                this.dao.daoToken, 
                this.$store.state.address, 
                this.$route.params.id
            )

            const allocation = result.decodedResult
            if (allocation) this.allocation = allocation
        },
        approveToken: async function () {
            await approve(
                this.aeSdk,
                this.dao.daoToken,
                this.$route.params.id,
                this.$toWei('10000000000')
            )
            
            this.getAllowance()
        },
        execute: async function () {
            const result = await executeProposal(this.aeSdk, this.$route.params.id, this.proposalId,
                "Sent proposal required amount from treasure to DAO owner's wallet"
            )

            console.log(result);
        },
        vote: async function (cast, gasless) {
            await voteProposal(this.aeSdk, this.$route.params.id, this.proposalId, {
                amount: this.dao.governance.minParticipation,
                cast: cast,
                gasless: gasless
            })

            this.getDao()
        },
        getDao: async function () {
            const result = await daoState(this.aeSdk, this.$route.params.id);
            this.dao = result.decodedResult
            this.proposal = this.dao.proposals.get(this.proposalId)
            this.loading = false
            this.getAllowance()
        },
        getApprovesVotesCount: function () {
            let sum = 0
            console.log(this.proposal.approves);
            for (let index = 0; index < this.proposal.approves.length; index++) {
                const voter = this.proposal.approves[index]
                sum += Number(this.proposal.votes.get(voter))
            }
            return sum
        },
        getDisApprovesVotesCount: function () {
            let sum = 0
            for (let index = 0; index < this.proposal.disapproves.length; index++) {
                const voter = this.proposal.disapproves[index]
                sum += Number(this.proposal.votes.get(voter))
            }
            return sum
        },
    },
    mounted() {
        this.getDao();
    }
}
</script>

<style scoped>
section {
    background-color: var(--background-gray);
    padding-top: 120px;
    padding-bottom: 100px;
}

.grid_container {
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.voting {
    padding: 20px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
    color: var(--black);
    width: 800px;
}

.voting_head h3 {
    font-size: 30px;
    color: var(--gray-dark);
}

.voting_head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.voting_head_options {
    display: flex;
    align-items: center;
    background: var(--background-gray);
    border-radius: 12px;
    padding: 6px;
}

.proposal_info_time {
    display: flex;
    align-items: center;
    gap: 6px;
}

.proposal_info_time svg {
    width: 18px;
    height: 18px;
}

.proposal_info_time p {
    font-size: 12px;
    font-weight: 500;
}


.voting_head_options p {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    color: var(--gray-dark);
}

.title h3 {
    font-size: 50px;
    font-weight: 600;
}

.title .published {
    margin-top: 10px;
    font-size: 14px;
    color: var(--gray-dark);
    font-weight: 500;
}

.title .published a {
    color: var(--background);
}

.title .summary {
    margin-top: 30px;
    font-size: 20px;
}

.progress {
    background-color: var(--gray-light);
    border-radius: 12px;
    padding: 4px;
    margin-top: 10px;
}

.progress_bar {
    height: 16px;
    background-color: var(--background);
    border-radius: 12px;
    transition: .1s;
    width: 1%;
}

.yes_head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.yes_vote {
    margin-top: 40px;
}

.yes_head_options {
    display: flex;
    align-items: center;
    gap: 40px;
}


.vote_actions {
    display: flex;
    align-items: center;
    gap: 20px;
}

.vote_actions button {
    background-color: var(--background);
    color: var(--white);
    border-radius: 12px;
    height: 45px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    font-size: 16px;
    border: none;
    font-weight: 500;
    cursor: pointer;
    margin-top: 30px;
}


.token_container {
    padding: 50px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
    width: 450px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.token_container img {
    height: 200px;
    transform: scale(1.5, 1.5);
}

.token_container h3 {
    font-size: 24px;
    margin-top: 50px;
}

.token_container p {
    font-size: 16px;
    color: var(--gray-dark);
    margin-top: 10px;
}

.token_container button {
    background-color: var(--background);
    color: var(--white);
    border-radius: 12px;
    height: 45px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    font-size: 16px;
    border: none;
    font-weight: 500;
    cursor: pointer;
    margin-top: 30px;
}
</style>