<template>
    <section>
        <div class="app_width">
            <header>
                <RouterLink to="/app">
                    <img src="/images/logo.png" alt="logo" class="header_logo">
                </RouterLink>
                <div class="header_menu">
                    <RouterLink :to="`/app/daos/${$route.params.id}`">
                        <div :class="$route.name == 'app-daos-dao' ? 'header_menuitem header_menuactive' : 'header_menuitem'">
                            <p>Dashboard</p>
                        </div>
                    </RouterLink>
                    <RouterLink :to="`/app/daos/${$route.params.id}/governance`">
                        <div :class="$route.name.startsWith('app-daos-dao-governance') ? 'header_menuitem header_menuactive' : 'header_menuitem'">
                            <p>Governance</p>
                        </div>
                    </RouterLink>
                    <RouterLink :to="`/app/daos/${$route.params.id}/treasure`">
                        <div :class="$route.name.startsWith('app-daos-dao-treasure') ? 'header_menuitem header_menuactive' : 'header_menuitem'">
                            <p>Treasure</p>
                        </div>
                    </RouterLink>
                    <RouterLink :to="`/app/daos/${$route.params.id}/members`">
                        <div :class="$route.name == 'app-daos-dao-members' ? 'header_menuitem header_menuactive' : 'header_menuitem'">
                            <p>Members</p>
                        </div>
                    </RouterLink>
                </div>
                <div class="header_actions">
                    <div class="header_action connect_wallet" v-on:click="disconnect()" v-if="$store.state.address">
                        <IconWallet :color="'var(--background)'" />
                        <p>{{ $store.state.address.substring(0, 10) + '••' + $store.state.address.substring(45, $store.state.address.length) }}</p>
                    </div>
                    <div class="header_action connect_wallet" v-else-if="!walletConnected && !walletConnecting"
                        v-on:click="connect()">
                        <IconWallet :color="'var(--background)'" />
                        <p>Connect Wallet</p>
                    </div>
                    <div class="header_action connect_wallet" v-else>
                        <img src="/images/loading_logo.svg">
                    </div>
                    <RouterLink to="/app/account" v-if="$store.state.address">
                        <div class="header_action">
                            <p>My Account</p>
                        </div>
                    </RouterLink>
                </div>
            </header>
        </div>
    </section>
</template>

<script setup>
import IconWallet from '../icons/IconWallet.vue';
</script>

<script>
import { mapState } from 'vuex';
import { walletDetector, BrowserWindowMessageConnection, RpcConnectionDenyError, } from '@aeternity/aepp-sdk';
export default {
    data: () => ({
        connectMethod: 'default',
        walletConnected: false,
        walletConnecting: null,
        reverseIframe: null,
        reverseIframeWalletUrl: 'https://wallet.superhero.com/',
        walletInfo: null,
    }),
    computed: {
        ...mapState(['aeSdk']),
        walletName() {
            if (!this.aeSdk) return 'SDK is not ready';
            if (!this.walletConnected) return 'Wallet is not connected';
            return this.walletInfo.name;
        },
    },
    methods: {
        async scanForWallets() {
            return new Promise((resolve) => {
                let stopScan;

                const handleWallets = async ({ wallets, newWallet }) => {
                    newWallet = newWallet || Object.values(wallets)[0];
                    stopScan();
                    resolve(newWallet.getConnection());
                };

                const scannerConnection = new BrowserWindowMessageConnection();
                stopScan = walletDetector(scannerConnection, handleWallets);
            });
        },
        async connect() {
            this.walletConnecting = true;
            try {
                if (this.connectMethod === 'reverse-iframe') {
                    this.reverseIframe = document.createElement('iframe');
                    this.reverseIframe.src = this.reverseIframeWalletUrl;
                    this.reverseIframe.style.display = 'none';
                    document.body.appendChild(this.reverseIframe);
                }

                const connection = await this.scanForWallets();

                try {
                    this.walletInfo = await this.aeSdk.connectToWallet(connection);
                } catch (error) {
                    if (error instanceof RpcConnectionDenyError) connection.disconnect();
                    throw error;
                }
                this.walletConnected = true;
                const { address: { current } } = await this.aeSdk.subscribeAddress('subscribe', 'connected');
                this.$store.commit('setAddress', Object.keys(current)[0]);
                console.log(this.aeSdk);
            } finally {
                this.walletConnecting = false;
            }
        },
        async disconnect() {
            await this.aeSdk.disconnectWallet();
            this.walletConnected = false;
            if (this.reverseIframe) this.reverseIframe.remove();
            this.$emit('aeSdk', null);
        },
    },
};
</script>

<style scoped>
section {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    backdrop-filter: blur(12px);
    background: var(--background);
    z-index: 10;
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
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    padding: 10px 16px;
}

.header_menuactive {
    background-color: var(--white);
    border-radius: 12px;
    color: black;
}

.header_actions {
    display: flex;
    align-items: center;
    gap: 10px;
}


.header_actions .connect_wallet {
    background-color: var(--white);
    min-width: 190px;
}

.connect_wallet img {
    width: 30px;
}

.header_action {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    height: 48px;
    padding: 0 24px;
    border-radius: 12px;
}

.header_actions .header_action {
    background-color: var(--white);
}

.header_actions .header_action p {
    font-size: 16px;
    font-weight: 500;
    color: var(--background);
}
</style>