<template>
    <div class="view">
        <img src="/images/loading_logo.svg" alt="">
    </div>
</template>

<style>
.view {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    background: var(--white);
}

.view img {
    height: 80px;
}
</style>