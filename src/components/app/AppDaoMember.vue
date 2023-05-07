<template>
    <ProgressView v-if="loading" />
    <section v-else>
        <div class="app_width">
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
            <div class="member_container" v-else-if="daoMembers">
                <div class="members_info">
                    <IconPeople />
                    <RouterLink :to="`/app/daos/${$route.params.id}/members/add`">
                        <button>Add members</button>
                    </RouterLink>
                </div>

                <div class="members_count">
                    <h3>{{ daoMembers.size }} Members</h3>
                    <p>Wallet-Based</p>
                </div>
            </div>

            <div class="dao_form">
                <div class="members form" v-if="dao.membership.participation > 0">
                    <div class="member" v-for="memberAddress, i in [...dao.membership.multisigMembers.keys()]" :key="i">
                        <div class="member_info">
                            <img src="/images/user.jpg" alt="">
                            <p>{{ memberAddress.substring(0, 10) + '...' + memberAddress.substring(45, memberAddress.length)
                            }}
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
                <div class="members form" v-else-if="daoMembers">
                    <div class="member" v-for="memberAddress, i in [...daoMembers.keys()]" :key="i">
                        <div class="member_info">
                            <img src="/images/user.jpg" alt="">
                            <p>{{ memberAddress.substring(0, 10) + '...' + memberAddress.substring(45, 53) }}
                                {{ $store.state.address == memberAddress ? '(You)' : '' }}
                            </p>
                        </div>
                        <a :href="`https://explorer.testnet.aeternity.io/account/${memberAddress}`" target="_blank">
                            <div class="member_link">
                                <p>{{ $fromWei(daoMembers.get(memberAddress)) }} YT (100%)</p>
                                <IconOut />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<script>
import { mapState } from 'vuex';
import { daoState, tokenBalances } from '../../scripts/aeternity'
import ProgressView from './ProgressView.vue';
export default {
    data() {
        return {
            proposal: {
                title: "",
                summary: ""
            },
            loading: true,
            dao: null
        };
    },
    methods: {
        getDao: async function () {
            const result = await daoState(this.aeSdk, this.$route.params.id);
            this.dao = result.decodedResult;
            
            if (this.dao.membership.participation == 0) {
                const result = await tokenBalances(this.aeSdk, this.dao.daoToken)
                this.daoMembers = result.decodedResult
            }
            
            this.loading = false;
        },
    },
    computed: {
        ...mapState(["aeSdk"])
    },
    mounted() {
        this.getDao();
    },
    components: { ProgressView }
}
</script>

<style scoped>
section {
    background-color: var(--background-gray);
    padding-top: 120px;
    padding-bottom: 100px;
    min-height: 100vh;
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

.dao_form {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.form {
    width: 700px;
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