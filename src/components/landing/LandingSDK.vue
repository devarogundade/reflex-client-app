<template>
    <section>
        <div class="app_width">
            <div class="sdk_container">
                <video controls src=""></video>
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
    height: 550px;
    border-radius: 12px;
    box-shadow: 0 17px 17px -12px rgba(216, 182, 203, 0.31);
    overflow: hidden;
}

.sdk_container video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>