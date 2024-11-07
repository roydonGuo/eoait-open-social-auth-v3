<script setup>
import {ref, onMounted} from "vue";
import {openAuthPlatformList} from "@/api/auth.js";

const platformList = ref([])

const loadPlatformList = async () => {
  const platformListRes = await openAuthPlatformList()
  if (platformListRes.data.code === 200) {
    platformList.value = platformListRes.data.data;
  }
  console.log(platformList.value)
}

onMounted(() => {
  loadPlatformList()
})

</script>

<template>
  <div>
    <!--    三方开放平台 -->
    <el-row :gutter="20">
      <el-col :span="3" v-for="item in platformList" class="mb-4 ">
        <el-card class="cursor-pointer hover:shadow-lg transition ease-in-out duration-300">
          <template #header>
            <div class="card-header flex items-center ">
              <el-image style="width: 24px; height: 24px"
                        :src="'https://cdn.jsdelivr.net/gh/justauth/justauth-oauth-logo@1.11/' + item.enname + '.png'"
                        :fit="'cover'"/>
              <span class="ml-2 text-clamp font-semibold">{{ item.name }}</span>
            </div>
          </template>
          <div class="text item">{{ item.since }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

</style>
