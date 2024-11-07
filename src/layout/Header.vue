<script setup>
const menus = [
  {
    id: 0,
    name: "首页",
    link: "/"
  },
  {
    id: 1,
    name: "认证信息",
    link: "auth"
  }
]
</script>

<template>
  <el-header class="shadow">
    <el-row class="w-full h-full" :gutter="20">
      <el-col :span="4">
        <div class="grid-content ep-bg-purple"/>
        logo
      </el-col>
      <el-col :span="16">
        <div class="grid-content ep-bg-purple">

        menu
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple"/>
        login-user
      </el-col>
    </el-row>
  </el-header>
</template>

<style scoped>

</style>
