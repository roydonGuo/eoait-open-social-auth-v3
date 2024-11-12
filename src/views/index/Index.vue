<script setup>
import {onMounted, ref} from "vue";
import {openAuthPlatformList, renderAuthLink} from "@/api/auth.js";
import {Picture} from "@element-plus/icons-vue";
import {ElMessage} from 'element-plus'
import {useRouter} from "vue-router";

const router = useRouter();

const platformList = ref([])

const loadPlatformList = async () => {
  const res = await openAuthPlatformList()
  if (res.data.code === 200) {
    platformList.value = res.data.data;
  }
}

/**
 * 点击事件
 * @param item
 */
const handleSelect = async (item) => {
  // 跳转新连接
  const res = await renderAuthLink(item.enname)
  if (res.data.code === 200) {
    const link = res.data.data
    window.open(link)
  }
}

/**
 * 加载路径参数
 * 路径参数：token => 登录token
 * http://localhost:5173/?token=111
 */
const loadLocationQuery = () => {
  const query = window.location.search.substring(1)
  if (query) {
    const params = new URLSearchParams(query)
    const code = params.get('code')
    const msg = params.get('msg')
    const data = params.get('data')
    console.log("code" + code)
    if (code === '200') {
      // 登陆成功，获取token
      console.log("token" + data)
      // 存储token
      localStorage.setItem('token', data)
      // todo token 存储 pinia
      router.push({path: '/'})
      ElMessage({
        message: '登录成功',
        type: 'success',
      })
    } else if (code === '401') {
      // 未认证
      ElMessage({
        message: msg,
        type: 'error',
      })
    } else {
      // 未知失败
      ElMessage({
        message: '系统异常',
        type: 'error',
      })
    }
  }
}

onMounted(() => {
  loadLocationQuery()
  loadPlatformList()
})

</script>

<template>
  <el-scrollbar>
    <!--    三方开放平台 -->
    <el-row :gutter="20" class="w-full">
      <el-col :span="3" v-for="item in platformList" class="mt-4" @click="handleSelect(item)">
        <el-card
            class="cursor-pointer hover:shadow-lg transition ease-in-out duration-300 hover:text-blue-500 hover:bg-blue-50">
          <template #header>
            <div class="card-header flex items-center ">
              <el-image style="width: 24px; height: 24px"
                        lazy
                        :src="'https://cdn.jsdelivr.net/gh/justauth/justauth-oauth-logo@1.11/' + item.enname + '.png'"
                        :fit="'cover'">
                <template #error>
                  <div class="image-slot">
                    <el-icon>
                      <Picture/>
                    </el-icon>
                  </div>
                </template>
              </el-image>
              <span class="ml-2 text-clamp font-semibold">{{ item.name }}</span>
            </div>
          </template>
          <div class="text item">
            <span>{{ item.since }}</span>
            <span class="ml-2 text-red-500 font-semibold" v-if="item.isLatest">
              <el-tag type="danger" effect="dark" round>new</el-tag>
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<style scoped>

</style>
