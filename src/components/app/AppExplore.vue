<template>
    <section id="explore">
        <div class="app_width">
            <div class="explore_container">
                <h3 class="explore_container_title">Explore DAOs</h3>
                <div class="apps">
                    <RouterLink v-for="daoAddress, i in [...allDaos.keys()]" :key="i"
                        :to="`/app/daos/${daoAddress.replace('ak', 'ct')}`">
                        <div class="app">
                            <div class="app_head">
                                <img v-if="allDaos.get(daoAddress).logo != undefined" :src="allDaos.get(daoAddress).logo" alt="">
                                <img v-else src="/images/company.png" alt="">
                                <div class="app_head_text">
                                    <h6>{{ allDaos.get(daoAddress).name }}</h6>
                                    <p>{{ allDaos.get(daoAddress).subdomain }}.dao.chain</p>
                                </div>
                            </div>
                            <p class="app_desc">
                                {{ allDaos.get(daoAddress).summary }}
                            </p>
                            <div class="app_category">
                                <IconPeople />
                                <p v-if="allDaos.get(daoAddress).participation == 0">Token-Based</p>
                                <p v-else>Wallet-Based</p>
                            </div>
                        </div>
                    </RouterLink>
                </div>
                <div class="progress" v-if="progress">
                    <img src="/images/loading_logo.svg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconPeople from '../icons/IconPeople.vue';
</script>

<script>
import { mapState } from 'vuex';
import { factoryState } from '../../scripts/aeternity';
export default {
    computed: {
        ...mapState(["aeSdk"]),
    },
    data() {
        return {
            allDaos: [],
            progress: true
        };
    },
    async mounted() {
        const result = await factoryState(this.aeSdk);
        this.allDaos = result.decodedResult.daos;
        this.progress = false
    }
}
</script>

<style scoped>
section {
    padding-top: 200px;
    padding-bottom: 100px;
    min-height: 100vh;
    background-color: var(--background-gray);
}

.explore_container {
    margin-top: 80px;
}

.explore_container_title {
    font-size: 24px;
    font-weight: 600;
}

.apps {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 20px;
}

.app {
    padding: 24px;
    border-radius: 12px;
    background-color: var(--white);
    width: 625px;
    max-width: 100%;
}

.app_head {
    display: grid;
    grid-template-columns: 50px auto;
    gap: 20px;
    align-items: center;
    color: var(--black);
}

.app_head img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    object-fit: cover;
}

.app_head h6 {
    font-size: 24px;
    font-weight: 600;
}

.app_head p {
    font-size: 14px;
    margin-top: 2px;
}

.app_desc {
    color: var(--gray-dark);
    font-size: 16px;
    margin-top: 10px;
}

.app_category {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
}

.app_category svg {
    width: 20px;
    height: 20px;
}

.app_category p {
    font-size: 14px;
    color: var(--gray-dark);
    font-weight: 500;
}
</style>