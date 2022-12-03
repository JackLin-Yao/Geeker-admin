<script setup lang="ts">
import { ref } from 'vue'
import profile from './components/profile.vue'
import { ArrowRight } from '@element-plus/icons-vue'

let isFold = ref(false)
const emit = defineEmits(['changeCollapse'])
const isCollapse = () => {
  isFold.value = !isFold.value
  emit('changeCollapse', isFold.value)
}
</script>

<template>
  <div class="header">
    <div class="header-left">
      <div class="collapse" @click="isCollapse">
        <el-icon :size="25">
          <component :is="isFold ? 'Expand' : 'Fold'"></component>
        </el-icon>
      </div>
      <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-right">
      <profile></profile>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-left: 2px solid rgba(16 18 27 / 20%);
  background-color: #5046e5;

  .header-left {
    display: flex;
    align-items: center;
    margin-left: 12px;

    .breadcrumb {
      margin-left: 10px;
    }

    .collapse {
      cursor: pointer;
    }

    .el-icon {
      svg {
        color: #ffffff;
      }
    }
  }

  .header-right {
    margin-right: 20px;
  }
}
</style>
