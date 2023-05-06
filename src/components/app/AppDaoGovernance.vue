<template>
    <ProgressView v-if="loading" />
    <section v-else>
        <div class="app_width">
            <div class="proposal_created" v-if="dao.proposals">
                <div class="proposal_created_text">
                    <IconBox />
                    <h3>{{ dao.proposals.size }} <span>Proposals created</span></h3>
                </div>
                <RouterLink :to="`/app/daos/${$route.params.id}/governance/create`">
                    <button>New proposal</button>
                </RouterLink>
            </div>

            <div class="dao_form">

                <div class="proposals form" v-if="dao.proposals && dao.proposals.size > 0">
                    <RouterLink v-for="proposalId, i in [...dao.proposals.keys()]" :key="i"
                            :to="`/app/daos/${$route.params.id.replace('ak', 'ct')}/governance/${proposalId}`">
                            <div class="proposal">
                                <div class="proposal_info">
                                    <span style="background-color: red;"
                                        v-if="getProposalState(dao.proposals.get(proposalId)) == 'Ended'">Ended</span>
                                    <span style="background-color: green;"
                                        v-else-if="getProposalState(dao.proposals.get(proposalId)) == 'Upcoming'">Upcoming</span>
                                    <span v-else>{{ getProposalState(dao.proposals.get(proposalId)) }}</span>
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
                                </div>
                                <div class="proposal_head">
                                    <h3>{{ dao.proposals.get(proposalId).title }}</h3>
                                    <p class="desc">{{ dao.proposals.get(proposalId).summary }}</p>
                                    <p class="published">Published by <a
                                            :href="`https://explorer.testnet.aeternity.io/account/${dao.proposals.get(proposalId).owner}`">{{
                                                dao.proposals.get(proposalId).owner.substring(0, 10) + '...' +
                                                dao.proposals.get(proposalId).owner.substring(45, 53)
                                            }}
                                        </a> on {{
                                            $toDate(Number(dao.proposals.get(proposalId).createdOn)).month + ',' +
                                            $toDate(Number(dao.proposals.get(proposalId).createdOn)).date + ' ' +
                                            $toDate(Number(dao.proposals.get(proposalId).createdOn)).hour + ':' +
                                            $toDate(Number(dao.proposals.get(proposalId).createdOn)).min
                                        }}</p>
                                </div>
                                <div class="proposal_vote">
                                    <div class="wining">
                                        <p>Votes ({{ dao.proposals.get(proposalId).votes.size }})</p>
                                        <p>{{ $fromWei(sumVotes(dao.proposals.get(proposalId))) }} ${{
                                            daoToken ? daoToken.meta_info.symbol : 'Power'
                                        }}</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress_bar" :style="`width: ${(dao.proposals.get(proposalId).approves.length
                                                / dao.proposals.get(proposalId).votes.size) * 100}%;`"></div>
                                    </div>
                                    <div class="status">
                                        <p>Ongoing</p>
                                        <p>100%</p>
                                    </div>
                                </div>
                            </div>
                        </RouterLink>
                </div>

                <div class="create_proposal form" v-else>
                    <img src="/images/token-transfer.svg" alt="">
                    <h3>No proposal has been created</h3>
                    <p>Ready to distribute tokens or send funds? Initiate a token transfer here. For ideas on how to
                        distribute your community's token, read our guide on token distribution.</p>
                    <RouterLink :to="`/app/daos/${$route.params.id}/governance/create`">
                        <button>Create first proposal</button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ProgressView from './ProgressView.vue'
import IconBox from '../icons/IconBox.vue'
</script>

<script>
import { mapState } from 'vuex';
import { daoState } from '../../scripts/aeternity';
export default {
    computed: {
        ...mapState(['aeSdk'])
    },
    data() {
        return {
            loading: true,
            dao: null,
        };
    },
    methods: {
        getDao: async function () {
            const result = await daoState(this.aeSdk, this.$route.params.id);
            this.dao = result.decodedResult
            this.loading = false
        },
        sumVotes: function (proposal) {
            let sum = 0
            let keys = [...proposal.votes.keys()]
            for (let index = 0; index < keys.length; index++) {
                sum += Number(proposal.votes.get(keys[index]));
            }
            return sum
        },
        getProposalState: function (proposal) {
            const now = new Date().getTime()
            if (proposal.executed) return "Executed"
            if (now > proposal.startedOn && now < proposal.endedOn) return "On-going"
            if (now < proposal.startedOn) return "Upcoming"
            if (now > proposal.endedOn) return "Ended"
            return ""
        }
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
    min-height: 100vh;
}

.dao_form {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.form {
    width: 700px;
}

.proposal_container {
    width: 800px;
}

.proposal_created {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
}

.create_proposal {
    padding: 50px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
    margin-top: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.create_proposal img {
    height: 260px;
    transform: scale(1.5, 1.5);
}

.create_proposal h3 {
    font-size: 24px;
    margin-top: 60px;
}

.create_proposal p {
    font-size: 16px;
    color: var(--gray-dark);
    margin-top: 10px;
}

.create_proposal button {
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
    margin-top: 60px;
}


.proposal {
    padding: 20px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
    margin-top: 16px;
    color: black;
}

.proposal_created_text {
    display: flex;
    align-items: center;
    gap: 16px;
}

.proposal_created_text svg {
    width: 30px;
    height: 30px;
}

.proposal_created_text h3 {
    font-size: 30px;
    font-weight: 600;
}

.proposal_created_text span {
    font-size: 16px;
    font-weight: 500;
    color: var(--gray-dark);
}

.proposal_created button {
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
}

.proposal_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.proposal_info span {
    padding: 3px 8px;
    background-color: var(--blue);
    color: var(--white);
    font-size: 12px;
    border-radius: 12px;
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

.proposal_head {
    margin-top: 16px;
}

.proposal_head h3 {
    font-size: 24px;
    font-weight: 600;
}

.proposal_head .desc {
    margin-top: 6px;
    font-size: 16px;
    color: var(--gray-dark);
}

.proposal_head .published {
    margin-top: 10px;
    font-size: 14px;
    color: var(--gray-dark);
    font-weight: 500;
}

.proposal_head .published a {
    color: var(--background);
}

.proposal_vote {
    margin-top: 20px;
    background-color: var(--background-gray);
    border-radius: 10px;
    padding: 16px;
}

.wining {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.wining p:first-child {
    font-size: 16px;
    font-weight: 600;
}

.wining p:last-child {
    font-size: 16px;
    font-weight: 600;
    color: var(--gray-dark);
}

.progress {
    background-color: var(--gray-light);
    border-radius: 12px;
    padding: 4px;
    margin: 20px 0;
}

.progress_bar {
    height: 10px;
    background-color: var(--background);
    width: 200px;
    border-radius: 12px;
}

.status {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.status p:first-child {
    font-size: 16px;
    font-weight: 600;
    color: var(--background);
}

.status p:last-child {
    font-size: 16px;
    font-weight: 600;
    color: var(--background);
}

.proposal2_container {
    width: 440px;
}
</style>