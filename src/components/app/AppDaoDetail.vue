<template>
    <section>
        <div class="app_width">
            <div class="detail_container">
                <div class="detail_head">
                    <div class="detail_head_text">
                        <h1>YatsuDAO_Ryufukuji</h1>
                        <p class="domain">yatsudao-rfj.dao.eth</p>
                        <div class="link">
                            <p>https://reflex.netlify.app/app/daos/0x84fa389b5f9486b30354f0787424168caad6b4fb</p>
                            <IconCopy :color="'var(--background)'" />
                        </div>
                        <p class="detail_head_text_desc">
                            This is a DAO to discuss and implement management practices to turn abandoned paddy fields in
                            Ryufukuji, Inzai, Chiba, into valuable and attractive green-infrastructure.
                        </p>
                    </div>
                    <div class="detail_head_image">
                        <img src="https://ipfs.eth.aragon.network/ipfs/QmS4TURPPg75etrhFS9z6S6mo2ZzsEq5BmRL463dGbUt9J"
                            alt="">
                    </div>
                </div>
                <div class="detail_tail">
                    <div class="detail_tail_options">
                        <div class="option">
                            <IconClock />
                            <p>April 2023</p>
                        </div>
                        <div class="option">
                            <IconBlockchain />
                            <p>aeternity</p>
                        </div>
                        <div class="option">
                            <IconPeople />
                            <p>Token-Based</p>
                        </div>
                    </div>

                    <div class="favourite">

                    </div>
                </div>
            </div>


            <div class="proposal_container">
                
            </div>
        </div>
    </section>
</template>

<script setup>
import IconCopy from '../icons/IconCopy.vue';
import IconPeople from '../icons/IconPeople.vue';
</script>

<style scoped>
section {
    background-color: var(--gray-light);
    padding-top: 120px;
    height: 96vh;
}

.detail_container {
    background-color: var(--white);
    padding: 50px;
    border-radius: 12px;
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

.detail_tail_options .option p {
    font-size: 12px;
    font-weight: 500;
}


.detail_tail_options .option  svg {
    width: 20px;
    height: 20px;
}
</style>