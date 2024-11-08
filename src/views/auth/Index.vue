<script setup>
import {ref, onMounted} from "vue";
import {getOauthUsers} from "@/api/auth.js";
import {Picture} from "@element-plus/icons-vue";

const users = ref([])
const dialogVisible = ref(false)
const dialogTitle = ref('')
const item = ref({})

const loadUsers = async () => {
  const res = await getOauthUsers()
  console.log(res)
  if (res.data.code === 200) {
    users.value = res.data.data
  }
}

const handleInfo = (info, content) => {
  switch (info) {
    case 'token':
      dialogVisible.value = true
      dialogTitle.value = 'token'
      item.value = content
      break
    case 'rawUserInfo':
      dialogVisible.value = true
      dialogTitle.value = 'rawUserInfo'
      item.value = content
      break
  }
}

onMounted(() => {
  loadUsers()
})
</script>

<template>
  <el-scrollbar>
  <el-card class="mt-4 hover:shadow-lg transition ease-in-out duration-300 hover:text-blue-500 hover:bg-blue-50"
           v-for="item in users">
    <template #header>
      <div class="card-header flex items-center">
        <el-avatar style="width: 32px; height: 32px"
                   :src="item.avatar"
                   lazy
                   :fit="'cover'"/>
        <span class="ml-2 text-clamp font-semibold">{{ item.nickname }}</span>
      </div>
    </template>
    <div class="text item">
      <div>uuid: {{ item.uuid }}</div>
      <div class="mt-3">username: {{ item.username }}</div>
      <div class="mt-3">source: {{ item.source.toLowerCase() }}
        <el-image style="width: 24px; height: 24px"
                  lazy
                  :src="'https://cdn.jsdelivr.net/gh/justauth/justauth-oauth-logo@1.11/' + item.source.toLowerCase() + '.png'"
                  :fit="'cover'">
          <template #error>
            <div class="image-slot">
              <el-icon>
                <Picture/>
              </el-icon>
            </div>
          </template>
        </el-image>
      </div>
      <div class="mt-3">token: <span class="text-blue-500 cursor-pointer"
                                     @click="handleInfo('token',item.token)">查看详情</span>
      </div>
      <div class="mt-3">rawUserInfo: <span class="text-blue-500 cursor-pointer"
                                           @click="handleInfo('rawUserInfo',item.rawUserInfo)">查看详情</span>
      </div>
      <div class="mt-3">operate:
        <span class="text-blue-500 cursor-pointer">refresh</span>
        <span class="text-blue-500 cursor-pointer ml-4">revoke</span>
      </div>
    </div>
  </el-card>
  </el-scrollbar>
  <el-dialog :title="dialogTitle" v-model="dialogVisible">
    <div class="text item">
<!--      {{ item }}-->
      <json-viewer :value="item" copyable boxed sort />
    </div>
  </el-dialog>
</template>

<style scoped>

</style>
