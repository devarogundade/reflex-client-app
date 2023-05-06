<template>
    <div class="view">
        <img src="/images/loading_logo.svg" alt="">
    </div>
</template>

<style scoped>
.view {
    width: 120px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 10px #ccc;
    z-index: 5;
    background: var(--white);
    border-radius: 12px;
}

.view img {
    height: 50px;
}
</style>