<template>
    <section>
        <div class="app_width">
            <div class="hero_container">
                <div class="hero_cta">
                    <div class="hero_text_content">
                        <h1>Explore Organizations</h1>
                        <p>Create and Manage your DAO, explore communities, and find inspiration for your project.</p>
                    </div>
                    <img src="/images/hero2.png" alt="">
                </div>
            </div>

            <div class="hero_create">
                <div class="create_item">
                    <IconDAO />
                    <h3>Create your DAO</h3>
                    <p>Mint tokens, set governance parameters, and deploy your DAO on-chain in minutes with our no-code
                        setup process.</p>
                    <RouterLink to="/app/create">
                        <button>Create a DAO</button>
                    </RouterLink>
                </div>

                <div class="create_item">
                    <IconDAO />
                    <h3>Learn about DAOs</h3>
                    <p>Find inspiration and learn about DAOs in our education portal designed for builders at every stage of
                        the journey.</p>
                    <a href="" target="_blank">
                        <button>Learn about DAOs</button>
                    </a>
                </div>

                <div class="create_item">
                    <IconDAO />
                    <h3>Reflex SDK</h3>
                    <p>Developer kits that developers can plug-in into their codebase to powerhouse project governance and DAOs.</p>
                    <button class="soon">Coming soon</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconDAO from '../icons/IconBoxTick.vue';
</script>

<style scoped>
.hero_container {
    height: 550px;
    padding-top: 200px;
    position: relative;
}

.hero_cta {
    display: flex;
    align-items: start;
    justify-content: space-between;
}

.hero_cta img {
    height: 400px;
    margin-top: -50px;
}

.hero_text_content {
    width: 420px;
}

.hero_text_content h1 {
    font-size: 60px;
    letter-spacing: -4px;
    font-weight: 700;
    line-height: 90%;
    color: var(--white);
    font-family: 'Syne', sans-serif;
}

.hero_text_content p {
    margin-top: 20px;
    font-size: 20px;
    color: var(--white);
}

.hero_create {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    position: absolute;
    left: 50%;
    bottom: 200px;
    transform: translate(-50%, 0);
    width: 1280px;
    max-width: 100%;
}

.create_item {
    background: rgba(255, 255, 255, 0.68);
    backdrop-filter: blur(50px);
    padding: 24px;
    padding-top: 44px;
    border-radius: 12px;
}

.create_item svg {
    width: 50px;
    height: 50px;
}

.create_item h3 {
    font-size: 30px;
    font-weight: 600;
    margin-top: 30px;
}


.create_item p {
    margin-top: 10px;
    font-size: 16px;
}

.create_item button {
    background-color: var(--background);
    color: var(--white);
    border-radius: 12px;
    height: 50px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    font-size: 16px;
    border: none;
    font-weight: 500;
    margin-top: 20px;
    cursor: pointer;
}

.soon {
    background-color: var(--white) !important;
    color: var(--gray) !important;
    font-weight: 600 !important;
}
</style>