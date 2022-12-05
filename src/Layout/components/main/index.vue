<script setup lang="ts">
import { ref } from 'vue'
let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 2',
    name: '2',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
  {
    title: 'Tab 1',
    name: '1',
  },
])
</script>

<template>
  <div class="mainpage">
    <el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable style="min-width: 100px">
      <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name" class="tab-item">
      </el-tab-pane>
    </el-tabs>
    <el-scrollbar height="100%"> </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.mainpage {
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: 43px;

  .demo-tabs {
    box-sizing: border-box;
    padding: 5px;

    ::v-deep .el-tabs__header {
      margin-bottom: 0px !important;

      .el-tabs__nav-prev,
      .el-tabs__nav-next {
        border-radius: 6px;

        // background-color: rgba(16 18 27 / 15%);
        i {
          height: 15px;
          width: 15px;
        }
      }

      .el-tabs__nav-scroll {
        background-color: transparent;
      }
    }

    ::v-deep .el-tabs__item {
      margin: 0 2.5px !important;
      border: 0;
      border-radius: 10px;
      background-color: var(--el-color-white);
    }
  }
}
</style>
