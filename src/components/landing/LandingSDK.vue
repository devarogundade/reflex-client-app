<template>
    <section>
        <div class="app_width">
            <div class="sdk_container">
                <IconSDK />
                <h3>Build your DAO with a few lines of code using the Reflex SDK.</h3>
                <img src="/images/sdk.png" alt="sdk">
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: 100px 0;
    padding-bottom: 300px;
}

.app_width {
    position: relative;
}

.sdk_container {
    position: absolute;
    background-color: var(--white);
    width: 100%;
    height: 400px;
    border-radius: 12px;
    box-shadow: 0 17px 17px -12px rgba(216, 182, 203, 0.31);
}
</style>