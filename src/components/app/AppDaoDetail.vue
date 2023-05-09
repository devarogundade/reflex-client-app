<template>
    <ProgressView v-if="loading" />
    <section v-else>
        <div class="app_width">
            <div class="detail_container">
                <div class="detail_head" v-if="dao.metadata">
                    <div class="detail_head_text">
                        <h1>{{ dao.metadata.name }}</h1>
                        <p class="domain">{{ dao.metadata.subdomain }}.dao.chain</p>
                        <div class="link">
                            <p>{{ `reflex-protocol.netlify.app/app/daos/${$route.params.id}` }}</p>
                            <IconCopy :color="'var(--background)'" />
                        </div>
                        <p class="detail_head_text_desc">
                            {{ dao.metadata.summary }}
                        </p>
                    </div>
                    <div class="detail_head_image">
                        <img v-if="dao.metadata.logo != undefined" :src="dao.metadata.logo" alt="">
                        <img v-else src="/images/company.png" alt="">
                    </div>
                </div>
                <div class="detail_tail">
                    <div class="detail_tail_options">
                        <div class="option">
                            <IconClock :color="'var(--background)'" />
                            <p>April 2023</p>
                        </div>
                        <div class="option">
                            <IconBoxTick :color="'var(--background)'" />
                            <p>aeternity</p>
                        </div>
                        <div class="option" v-if="dao.membership">
                            <IconPeople :color="'var(--background)'" />
                            <p v-if="dao.membership.participation == 0">Token-Based</p>
                            <p v-if="dao.membership.participation == 1">Wallet-Based</p>
                        </div>
                    </div>

                    <div class="links">
                        <a v-for="link, i in JSON.parse(dao.metadata.links)" :href="link.link" target="_blank" :key="i">
                            {{ link.name }}
                        </a>
                        <IconStar class="favourite" />
                    </div>
                </div>
            </div>

            <div class="dao_container">
                <div class="proposal_container">
                    <div class="proposal_created" v-if="dao.proposals">
                        <div class="proposal_created_text">
                            <IconBox />
                            <h3>{{ dao.proposals.size }} <span>Proposals created</span></h3>
                        </div>
                        <RouterLink :to="`/app/daos/${$route.params.id}/governance/create`">
                            <button>New proposal</button>
                        </RouterLink>
                    </div>

                    <div class="proposals" v-if="dao.proposals && dao.proposals.size > 0">
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

                    <div class="create_proposal" v-else>
                        <img src="/images/no-proposal.svg" alt="">
                        <h3>No proposal has been created</h3>
                        <p>Ready to distribute tokens or send funds? Initiate a token transfer here. For ideas on how to
                            distribute your community's token, read our guide on token distribution.</p>
                        <RouterLink :to="`/app/daos/${$route.params.id}/governance/create`">
                            <button>Create first proposal</button>
                        </RouterLink>
                    </div>
                </div>

                <div class="proposal2_container">
                    <div class="token_container" v-if="dao.treasure.history.length == 0">
                        <img src="/images/token-transfer.svg" alt="">
                        <h3>Make your first deposit</h3>
                        <p>Begin by making your first treasury deposit. Learn more about managing a DAO treasury in this
                            guide.</p>
                        <RouterLink :to="`/app/daos/${$route.params.id}/treasure`">
                            <button>Go to treasure</button>
                        </RouterLink>
                    </div>
                    <div class="token_container" v-else>
                        <div class="token_balance">
                            <h3>{{ $fromWei(dao.treasure.balance) }} Æ <span>Balance</span></h3>
                            <h3>{{ $fromWei(dao.treasure.locked) }} Æ <span>Locked</span></h3>
                        </div>
                        <RouterLink :to="`/app/daos/${$route.params.id}/treasure`">
                            <button>Go to treasure</button>
                        </RouterLink>
                    </div>

                    <div class="member_container" v-if="dao.membership.participation > 0">
                        <div class="members_info">
                            <IconPeople />
                            <RouterLink :to="`/app/daos/${$route.params.id}/members/add`">
                                <button>Add members</button>
                            </RouterLink>
                        </div>

                        <div class="members_count">
                            <h3>{{ dao.membership.multisigMembers.size }} Members</h3>
                            <p>Wallet-Based</p>
                        </div>
                    </div>
                    <div class="member_container" v-else>
                        <div class="members_info">
                            <IconPeople />
                            <RouterLink :to="`/app/daos/${$route.params.id}/members/add`">
                                <button>Add members</button>
                            </RouterLink>
                        </div>

                        <div class="members_count">
                            <h3>{{ daoToken.balances.size }} Members</h3>
                            <p>Token-Based -> {{ daoToken.meta_info.name }}</p>
                        </div>
                    </div>

                    <div class="members" v-if="dao.membership.participation > 0">
                        <div class="member" v-for="memberAddress, i in [...dao.membership.multisigMembers.keys()]" :key="i">
                            <div class="member_info">
                                <img src="/images/user.jpg" alt="">
                                <p>{{ memberAddress.substring(0, 10) + '...' + memberAddress.substring(45,
                                    memberAddress.length) }}
                                    {{ $store.state.address == memberAddress ? '(You)' : '' }}
                                </p>
                            </div>
                            <a :href="`${memberAddress}`">
                                <div class="member_link">
                                    <p>{{ $fromWei(dao.membership.multisigMembers.get(memberAddress)) }} Power (100%)</p>
                                    <IconOut />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="members" v-else-if="daoToken">
                        <div class="member" v-for="memberAddress, i in [...daoToken.balances.keys()]" :key="i">
                            <div class="member_info">
                                <img src="/images/user.jpg" alt="">
                                <p>{{ memberAddress.substring(0, 10) + '...' + memberAddress.substring(45, 53) }}
                                    {{ $store.state.address == memberAddress ? '(You)' : '' }}
                                </p>
                            </div>
                            <a :href="`https://explorer.testnet.aeternity.io/account/${memberAddress}`" target="_blank">
                                <div class="member_link">
                                    <p>{{ $fromWei(daoToken.balances.get(memberAddress)) }} YT (100%)</p>
                                    <IconOut />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconCopy from '../icons/IconCopy.vue';
import IconStar from '../icons/IconStar.vue'
import IconClock from '../icons/IconClock.vue'
import IconBox from '../icons/IconBox.vue'
import IconBoxTick from '../icons/IconBoxTick.vue'
import IconPeople from '../icons/IconPeople.vue';
import IconOut from '../icons/IconOut.vue'
import ProgressView from './ProgressView.vue';
import { daoState, tokenState } from '../../scripts/aeternity'
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
            daoToken: null
        };
    },
    methods: {
        getDao: async function () {
            const result = await daoState(this.aeSdk, this.$route.params.id);
            this.dao = result.decodedResult

            if (this.dao.membership.participation == 0) {
                const result = await tokenState(this.aeSdk, this.dao.daoToken)
                this.daoToken = result.decodedResult
            }

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
}

.detail_container {
    background-color: var(--white);
    padding: 50px;
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
}

.detail_head {
    gap: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.detail_head_text h1 {
    font-size: 40px;
    font-weight: 600;
}

.detail_head_text .domain {
    font-size: 14px;
    margin-top: 4px;
    font-weight: 500;
}

.detail_head_text .link {
    margin-top: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.link {
    color: var(--background);
    font-size: 14px;
    font-weight: 500;
}

.detail_head_text_desc {
    font-size: 16px;
    color: var(--gray-dark);
    margin-top: 10px;
    font-weight: 500;
}

.detail_head_image img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    object-fit: cover;
}

.detail_tail {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.detail_tail_options {
    display: flex;
    align-items: center;
    gap: 16px;
}

.detail_tail_options .option {
    display: flex;
    align-items: center;
    gap: 8px;
}

.links {
    display: flex;
    align-items: center;
    gap: 20px;
}

.links a {
    font-weight: 500;
    color: var(--background);
}

.favourite {
    background-color: var(--background-gray);
    padding: 10px;
    border-radius: 12px;
    width: 50px;
    height: 50px;
}

.detail_tail_options .option p {
    font-size: 12px;
    font-weight: 500;
}


.detail_tail_options .option svg {
    width: 20px;
    height: 20px;
}

.dao_container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 30px;
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
    color: var(--black);
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
    width: 1%;
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

.token_container {
    padding: 50px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.token_balance {
    display: flex;
    align-items: center;
    gap: 30px;
}

.token_balance h3 {
    margin: 0 !important;
    font-size: 30px;
    font-weight: 600;
}

.token_balance span {
    font-size: 16px;
    font-weight: 500;
    color: var(--gray-dark);
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

.member_container {
    padding: 20px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
    width: 440px;
    width: 100%;
    margin-top: 16px;
}

.members_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.members_count {
    margin-top: 40px;
}

.members_count h3 {
    font-size: 30px;
    font-weight: 600;
}

.members_count p {
    font-size: 16px;
    font-weight: 500;
    color: var(--gray-dark);
}

.member_container button {
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

.member {
    padding: 20px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
    width: 440px;
    width: 100%;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.member_info {
    display: flex;
    align-items: center;
    gap: 16px;
}

.member_info img {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    object-fit: cover;
}

.member_info p {
    font-size: 16px;
    font-weight: 600;
}

.member_link {
    display: flex;
    align-items: center;
    gap: 4px;
}

.member_link p {
    font-size: 12px;
    font-weight: 500;
    color: var(--gray-dark);
}

.member_link svg {
    width: 14px;
    height: 14px;
}
</style>