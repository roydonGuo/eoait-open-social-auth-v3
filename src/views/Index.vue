<template>
    <Layout/>
</template>

<script setup >
import {onMounted} from "vue";
import Layout from "@/layout/Layout.vue";
import {ElMessage} from "element-plus";

onMounted(() => {
  // console.log('mounted')
  // ElMessage({
  //   message: 'Congrats, this is a success message.',
  //   type: 'success',
  // })
})
</script>

<style scoped>
</style>
