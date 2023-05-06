<template>
    <ProgressView v-if="loading" />
    <section v-else>
        <div class="app_width">
            <div class="proposal_created">
                <div class="proposal_created_text">
                    <IconBox />
                    <h3>{{ $fromWei(dao.treasure.balance) }} Æ <span>Balance</span></h3>
                    <h3>{{ $fromWei(dao.treasure.locked) }} Æ <span>Locked</span></h3>
                </div>
                <RouterLink :to="`/app/daos/${$route.params.id}/treasure/fund`">
                    <button>Add funds</button>
                </RouterLink>
            </div>

            <div class="dao_form">
                <div class="proposals form" v-if="dao.treasure.history.length > 0">
                    <div class="proposal" v-for="trx, i in dao.treasure.history" :key="i">
                            <div class="proposal_info">
                                <span>Add funds</span>
                                <div class="proposal_info_time">
                                    <IconClock />
                                    <p> 
                                        {{ 
                                        $toDate(Number(trx.timestamp)).month + ',' +
                                        $toDate(Number(trx.timestamp)).date + ' ' +
                                        $toDate(Number(trx.timestamp)).hour + ':' +
                                        $toDate(Number(trx.timestamp)).min
                                        }}
                                    </p>
                                </div>
                            </div>
                            <div class="proposal_head">
                                <p class="desc">{{ trx.summary }}</p>
                                <p class="published">By <a href="">{{ 
                                    dao.owner.substring(0, 10) + '...' +
                                    dao.owner.substring(45, 53)
                                }}</a></p>
                            </div>
                        </div>
                </div>

                <div class="create_proposal form" v-else>
                    <img src="/images/token-transfer.svg" alt="">
                    <h3>No funds in DAO's treasure</h3>
                    <p>Ready to distribute tokens or send funds? Initiate a token transfer here. For ideas on how to
                        distribute your community's token, read our guide on token distribution.</p>
                    <RouterLink :to="`/app/daos/${$route.params.id}/treasure/fund`">
                        <button>Add funds now</button>
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
            const result = await daoState(this.aeSdk, this.$route.params.id.replace('ak', 'ct'));
            this.dao = result.decodedResult
            this.loading = false
        },

        sumVotes: function(votes) {
            let sum = 0
            votes.forEach(vote => {
                sum += vote
            });
            return sum
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