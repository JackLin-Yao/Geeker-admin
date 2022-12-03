<script setup lang="ts">
import { Local } from '@/utils/storage'
import { useRouter } from 'vue-router'
const router = useRouter()

const exitLogin = () => {
  Local.remove('token')
  router.push('/login')
}
</script>

<template>
  <div class="collapse">
    <el-dropdown>
      <el-avatar :size="45" src="../../../../assets/img/svg-img.svg" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="exitLogin">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="scss">

</style>
