<template>
    <main>
        <DaoHeader />
        <RouterView />
        <LandingFooter />
    </main>
</template>

<script setup>
import DaoHeader from '../components/app/DaoHeader.vue'
import LandingFooter from '../components/landing/LandingFooter.vue'
</script>