<template>
  <Layout/>
</template>

<script setup>
import Layout from "@/layout/Layout.vue";
import {ElMessage} from "element-plus";
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import {bindSocialUser} from "@/api/auth.js";

const router = useRouter();

const loadLocationQuery = async () => {
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
      // 未认证|社交账号未绑定用户
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
  // loadLocationQuery()
})
</script>

<style scoped>
</style>
