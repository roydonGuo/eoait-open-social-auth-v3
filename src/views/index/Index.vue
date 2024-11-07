<script setup  >
import {ref, onMounted} from "vue";
import {openAuthPlatformList} from "@/api/auth.js";

const platformList = ref([])

const loadPlatformList = async () => {
  const platformListRes = await openAuthPlatformList()
  console.log(platformListRes)
  if (platformListRes.data.code === 200) {
    platformList.value = platformListRes.data.data;
  }
  console.log(platformList)
}

onMounted(() => {
  loadPlatformList()
})

</script>

<template>
  <div>index
    <div v-for="item in platformList">
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped>

</style>
