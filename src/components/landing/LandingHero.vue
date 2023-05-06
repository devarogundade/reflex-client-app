<template>
    <section>
        <div class="app_width">
            <div class="hero_container">
                <div class="hero_timeline">
                    <div class="hero_timeline_button">
                        <IconDiscover :color="'var(--background)'" />
                    </div>
                    <div class="hero_timeline_stroke"></div>
                </div>

                <div class="hero_contents">
                    <div class="hero_text_content">
                        <h1>Trustless. Transparent. Decentralized.</h1>
                        <p class="hero_text_content_desc">Launch your on the DAO aeternity blockchain and experience
                            governance at the speed of internet.</p>
                        <div class="hero_text_actions">
                            <RouterLink to="/app">
                                <div class="hero_text_action">
                                    <IconFlash :color="'var(--background)'" />
                                    <p>Launch your DAO</p>
                                </div>
                            </RouterLink>
                            <a href="" target="_blank">
                                <div class="hero_text_action">
                                    <p>What is DAO?</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="image_text_content">
                        <img src="/images/hero.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import IconFlash from '../icons/IconFlash.vue';
import IconDiscover from '../icons/IconDiscover.vue';
</script>

<style scoped>
.hero_container {
    margin-top: 260px;
    display: grid;
    grid-template-columns: 60px auto;
    gap: 30px;
}

.hero_contents {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
}

.hero_timeline {
    position: relative;
    margin-top: 20px;
}

.hero_timeline_button {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero_timeline_button svg {
    width: 36px;
    height: 36px;
}

.hero_timeline_stroke {
    width: 3px;
    height: calc(100% - 60px);
    background-color: var(--background-light);
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translate(-50%, 0);
}

.hero_text_content {
    width: 700px;
    max-width: 100%;
    padding-bottom: 220px;
}

.hero_text_content h1 {
    font-size: 100px;
    letter-spacing: -4px;
    font-weight: 700;
    line-height: 90%;
    color: var(--white);
    font-family: 'Syne', sans-serif;
}

.hero_text_content_desc {
    margin-top: 20px;
    font-size: 22px;
    color: var(--white);
    line-height: 32px;
}

.hero_text_actions {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
}

.hero_text_action {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    height: 48px;
    padding: 0 20px;
    border-radius: 12px;
}

.hero_text_actions a:first-child .hero_text_action {
    background-color: var(--white);
}

.hero_text_actions a:last-child .hero_text_action {
    border: 2px var(--white) solid;
}

.hero_text_actions a:first-child .hero_text_action p {
    font-size: 16px;
    font-weight: 500;
    color: var(--background);
}

.hero_text_actions a:last-child .hero_text_action p {
    font-size: 16px;
    font-weight: 500;
    color: var(--white);
}

.image_text_content {
    width: 280px;
}

.image_text_content img {
    width: 100%;
}
</style>