<script setup lang="ts">
import { Local } from '@/utils/storage'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  Local.remove('token')
  router.push('login')
}
</script>

<template>
  <el-button type="primary" @click="logout">退出登录</el-button>
</template>

<style scoped lang="scss">

</style>
