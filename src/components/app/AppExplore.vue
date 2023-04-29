<template>
    <section id="explore">
        <div class="app_width">
            <div class="explore_container">
                <h3 class="explore_container_title">Explore DAOs</h3>
                <div class="apps">
                    <RouterLink v-for="i in 6" :key="i" :to="`/app/daos/${i}`">
                        <div class="app">
                            <div class="app_head">
                                <img src="https://ipfs.eth.aragon.network/ipfs/QmS4TURPPg75etrhFS9z6S6mo2ZzsEq5BmRL463dGbUt9J"
                                    alt="">
                                <div class="app_head_text">
                                    <h6>YatsuDAO_Ryufukuji</h6>
                                    <p>vitalik.eth</p>
                                </div>
                            </div>
                            <p class="app_desc">
                                This is a DAO to discuss and implement management practices to turn abandoned paddy fields
                                in
                                Ryufukuji, Inzai, Chiba, into valuable and
                            </p>
                            <div class="app_category">
                                <IconPeople />
                                <p>Token-Based</p>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconPeople from '../icons/IconPeople.vue';
</script>

<style scoped>
section {
    padding-top: 200px;
    padding-bottom: 100px;
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