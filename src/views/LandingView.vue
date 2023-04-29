<template>
    <main>
        <LandingHeader />
        <RouterView />
        <LandingFooter />
    </main>
</template>

<script setup>
import LandingHeader from '../components/landing/LandingHeader.vue'
import LandingFooter from '../components/landing/LandingFooter.vue'
</script>