<script setup>
const menus = [
  {
    id: 0,
    name: "首页",
    link: "/",
    icon: "House"
  },
  {
    id: 1,
    name: "认证信息",
    link: "auth",
    icon: "User"
  }
]
import {ref} from "vue";
import {Sunny, Moon, Picture} from "@element-plus/icons-vue";
import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark();

const toggleDark = useToggle(isDark);

</script>

<template>
  <el-header class="header-container">
    <el-row class="w-full h-full" :gutter="20">
      <el-col :span="4">
        <div class="h-full flex items-center justify-center">
          <img style="width: 24px; height: 24px"
               src="@/assets/logo.png" alt="eoait"/>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="flex items-center h-full">
          <!--          <div class="flex items-center" v-for="item in menus">-->
          <!--            <router-link :to="item.link">{{ item.name }}</router-link>-->
          <!--          </div>-->
          <router-link class="router-link"
                       v-for="item in menus"
                       :key="item.id"
                       tag="div"
                       exact
                       :to="item.link">
            <div class="w-full h-full flex justify-center items-center">
              <el-icon :size="20">
                <component :is="item.icon"></component>
              </el-icon>
              <span class="ml-1">{{ item.name }}</span>
            </div>
          </router-link>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="w-full h-full flex justify-start items-center">
          <div class="w-full h-full flex justify-start items-center">
            <img
                :src="'https://niuyin-server.oss-cn-shenzhen.aliyuncs.com/member/2024/10/07/4eb4963fa6bb4f85aa0ba1f748978993.jpeg'"
                alt="avatar" class="shadow-md size-10 rounded-full"/>
            <span class="text-sm flex ml-2 items-center font-semibold"> roydon </span>
          </div>
          <el-switch
              v-model="isDark"
              :active-icon="Moon"
              :inactive-icon="Sunny"
              inline-prompt
              @change="toggleDark"
          />
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<style scoped>
.header-container {
  box-shadow: 0 2px 6px -2px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1);
}

.dark .header-container {
  box-shadow: 0 2px 6px -2px rgba(188, 185, 185, 0.1), 0 0 4px -2px rgba(32, 31, 31, 0.1);
}

.router-link {
  text-decoration: none;
  padding: .5rem 1rem;
  border-radius: .75rem;
}

.router-link-exact-active {
  background-color: var(--eoait-bg-primary);
  font-weight: 600;
}
</style>
