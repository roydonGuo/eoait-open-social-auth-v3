<template>
    <Layout/>
</template>

<script setup>
import {onMounted} from "vue";
import Layout from "@/layout/Layout.vue";

onMounted(() => {
  console.log('mounted')
})
</script>

<style scoped>
</style>
