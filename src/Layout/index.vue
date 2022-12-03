<script setup lang="ts">
import { ref } from 'vue'
import AsideView from './components/aside/index.vue'
import HeaderView from './components/header/index.vue'
import MainView from './components/main/index.vue'

let isFold = ref(false)
const handleCollapse = (flag: boolean) => {
  isFold.value = flag
}
</script>

<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside :width="isFold ? '64px' : '250px'">
        <AsideView :isFold="isFold"></AsideView>
      </el-aside>
      <el-container class="right-container">
        <el-header>
          <HeaderView @change-collapse="handleCollapse"></HeaderView>
        </el-header>
        <el-main>
          <MainView></MainView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100%;

  .container {
    width: 100vw;
    height: 100vh;

    .right-container {
      height: 100vh;
    }
  }

  .el-aside {
    transition: width 0.4s linear;
    box-sizing: border-box;
  }

  .el-header {
    padding: 0 !important;
    // border-bottom: 1px solid #fff;
  }

  .el-main {
    height: calc(100vh - 60px) !important;
    padding: 1px 2px 0px 1px !important;
    box-sizing: border-box;
    background-color: rgba(16 18 27 / 7%);
    // background-color: var(--el-color-white);
  }
}
</style>
