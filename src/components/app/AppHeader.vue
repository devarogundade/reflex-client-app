<template>
    <section>
        <div class="app_width">
            <header>
                <RouterLink to="/app">
                    <img src="/images/logo.svg" alt="logo" class="header_logo">
                </RouterLink>
                <div class="header_menu" v-if="$route.name == 'app-daos-dao'">
                    <RouterLink to="">
                        <div class="header_menuitem header_menuactive">
                            <p>Dashboard</p>
                        </div>
                    </RouterLink>
                    <RouterLink to="">
                        <div class="header_menuitem">
                            <p>Governance</p>
                        </div>
                    </RouterLink>
                    <a href="" target="_blank">
                        <div class="header_menuitem">
                            <p>Finance</p>
                        </div>
                    </a>
                    <a href="https://dao-fi-fusion-code-challenge.devpost.com/" target="_blank">
                        <div class="header_menuitem">
                            <p>Community</p>
                        </div>
                    </a>
                </div>
                <div class="header_actions">
                    <RouterLink to="/app">
                        <div class="header_action">
                            <IconWallet :color="'var(--background)'" />
                            <p>Connect Wallet</p>
                        </div>
                    </RouterLink>
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
import IconWallet from '../icons/IconWallet.vue';
</script>

<style scoped>
section {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    backdrop-filter: blur(12px);
    z-index: 10;
    background-color: #cf2e2e75;
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
    width: 50%;
}

.header_menuitem {
    color: var(--white);
    font-size: 16px;
    line-height: 24px;
}

.header_menuactive {
    padding: 10px 16px;
    background-color: var(--background-light);
    border-radius: 12px;
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