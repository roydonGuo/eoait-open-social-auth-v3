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
import {Sunny, Moon, House, User} from "@element-plus/icons-vue";
import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark();

const toggleDark = useToggle(isDark);

</script>

<template>
  <el-header class="shadow">
    <el-row class="w-full h-full" :gutter="20">
      <el-col :span="4">
        logo
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
