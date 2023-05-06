<template>
    <section>
        <div class="app_width">
            <header>
                <RouterLink to="/">
                    <img src="/images/logo.png" alt="logo" class="header_logo">
                </RouterLink>
                <div class="header_menu">
                    <RouterLink to="">
                        <div class="header_menuitem">
                            <p>Products</p>
                        </div>
                    </RouterLink>
                    <RouterLink to="/app#explore">
                        <div class="header_menuitem">
                            <p>Projects</p>
                        </div>
                    </RouterLink>
                    <a href="" target="_blank">
                        <div class="header_menuitem">
                            <p>Documentation</p>
                        </div>
                    </a>
                    <a href="https://dao-fi-fusion-code-challenge.devpost.com/" target="_blank">
                        <div class="header_menuitem">
                            <p>DAO-Fi Fusion</p>
                        </div>
                    </a>
                </div>
                <div class="header_actions">
                    <a href="/app" target="_blank">
                        <div class="header_action">
                            <IconFlash :color="'var(--background)'" />
                            <p>Launch your DAO</p>
                        </div>
                    </a>
                    <a href="" target="_blank">
                        <div class="header_action">
                            <IconCode :color="'var(--white)'" />
                            <p>Developers</p>
                        </div>
                    </a>
                </div>
            </header>
        </div>
    </section>
</template>

<script setup>
import IconCode from '../icons/IconCode.vue';
import IconFlash from '../icons/IconFlash.vue';
</script>

<style scoped>
section {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    backdrop-filter: blur(12px);
    z-index: 10;
    background-color: #de3f6c7a;
}

header {
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.header_logo {
    width: 120px;
}

.header_menu {
    display: flex;
    align-items: center;
    gap: 20px;
}

.header_menuitem {
    color: var(--white);
    font-size: 16px;
    line-height: 24px;
    padding: 10px 16px;
}

.header_actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.header_action {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    height: 48px;
    padding: 0 24px;
    border-radius: 12px;
}

.header_actions a:first-child .header_action {
    background-color: var(--white);
}

.header_actions a:last-child .header_action {
    border: 2px var(--white) solid;
}

.header_actions a:first-child .header_action p {
    font-size: 16px;
    font-weight: 500;
    color: var(--background);
}

.header_actions a:last-child .header_action p {
    font-size: 16px;
    font-weight: 500;
    color: var(--white);
}
</style>