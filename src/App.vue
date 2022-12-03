<script setup lang="ts"></script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style lang="scss">
.app {
  height: 100vh;
  width: 100vw;
}

.el-sub-menu__title i {
  color: rgb(44 56 74 / 68%);
}

.el-menu-hover-bg-color {
  background-color: #5046e5 !important;
}

/* 水平菜单、横向菜单高亮 背景色，鼠标 hover 时，有子级菜单的背景色 */
.el-menu-item.is-active,
.el-sub-menu.is-active .el-sub-menu__title,
.el-sub-menu:not(.is-opened):hover .el-sub-menu__title {
  @extend .el-menu-hover-bg-color;
}

.el-sub-menu.is-active.is-opened .el-sub-menu__title {
  background-color: unset !important;
}

.el-menu-item {
  border-radius: 25px;
}

.el-sub-menu {
  border-radius: 25px;
}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
