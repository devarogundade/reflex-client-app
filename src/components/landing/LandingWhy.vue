<template>
    <section>
        <div class="app_width">
            <div class="why_container">
                <h3 class="why_container_title">
                    Why build organizations onchain?
                </h3>

                <div class="why_items">
                    <div class="why_item">
                        <IconBlockchain />
                        <h6>Decentralized</h6>
                        <p>Eliminate single points of failure by building on unstoppable networks.</p>
                    </div>

                    <div class="why_item">
                        <IconBlockchain />
                        <h6>Permissionless</h6>
                        <p>Remove barriers with globally accessible and non-discriminating infrastructure.</p>
                    </div>

                    <div class="why_item">
                        <IconBlockchain />
                        <h6>Trustless</h6>
                        <p>Enforce decisions with smart contracts, removing the need for human intervention.</p>
                    </div>

                    <div class="why_item">
                        <IconBlockchain />
                        <h6>Transparent</h6>
                        <p>Keep an immutable record. Transactions are cryptographically verified, non-editable, and publicly
                            accessible.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconBlockchain from '../icons/IconBoxTick.vue'
</script>

<style scoped>
section {
    background-color: var(--gray-light);
    padding: 100px 0;
    padding-top: 200px;
}

.why_container_title {
    font-size: 20px;
    color: var(--background);
}

.why_items {
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-between;
}

.why_item {
    width: 280px;
}

.why_item svg {
    width: 50px;
    height: 50px;
    background-color: var(--white);
    border-radius: 12px;
    padding: 10px;
}

.why_item h6 {
    font-size: 18px;
    margin-top: 14px;
    color: var(--black);
}

.why_item p {
    margin-top: 14px;
    font-size: 16px;
    color: var(--black);
}
</style>

