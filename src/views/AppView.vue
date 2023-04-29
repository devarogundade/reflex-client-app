<template>
    <main>
        <AppHeader />
        <RouterView />
        <LandingFooter />
    </main>
</template>

<script setup>
import AppHeader from '../components/app/AppHeader.vue'
import LandingFooter from '../components/landing/LandingFooter.vue'
</script>