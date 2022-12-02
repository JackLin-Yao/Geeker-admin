<script setup lang="ts">
import AsideView from './components/aside/index.vue'
import HeaderView from './components/header/index.vue'
import MainView from './components/main/index.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <AsideView></AsideView>
      </el-aside>
      <el-container>
        <el-header>
          <HeaderView></HeaderView>
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

  .el-container {
    width: 100%;
    height: 100%;
  }

  .el-aside {
    background-color: antiquewhite;
  }

  .el-header {
    padding: 0 !important;
    background-color: aqua;
  }

  .el-main {
    padding: 0 !important;
    background-color: aquamarine;
  }
}
</style>
