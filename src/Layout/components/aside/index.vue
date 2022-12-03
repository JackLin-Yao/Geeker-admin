<script setup lang="ts">
import { reactive } from 'vue'
import type { RouteInfo } from './type/RouteInfo'

let menuInfo = reactive<Array<RouteInfo>>([
  {
    id: 10,
    name: '用户管理',
    icon: 'User',
    children: [
      {
        id: 101,
        name: '用户编辑',
        icon: 'User',
        children: [
          {
            id: 1011,
            name: '增加用户',
            path: '/adduser',
            icon: 'User',
          },
          {
            id: 1012,
            name: '删除用户',
            path: '/deleteuser',
            icon: 'User',
          },
          {
            id: 1013,
            name: '用户评论',
            path: '/usercomment',
            icon: 'User',
          },
        ],
      },
      {
        id: 102,
        name: '系统设置',
        path: '/system',
        icon: 'User',
      },
    ],
  },
  {
    id: 20,
    name: 'qu管理',
    icon: 'User',
    children: [
      {
        id: 101,
        name: 'ss编辑',
        icon: 'User',
      },
    ],
  },
])
let props = defineProps({
  isFold: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="aside">
    <div class="img-logo">
      <img src="../../../assets/img/logo.svg" alt="" />
    </div>
    <el-menu unique-opened default-active="3" :collapse="isFold">
      <el-scrollbar height="calc(100vh-60px)">
        <template v-for="menu in menuInfo" :key="menu.id">
          <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.name" :popper-offset="9"
            class="arrowhidden">
            <template #title>
              <el-icon>
                <component :is="menu.icon"></component>
              </el-icon>
              <span>{{ menu.name }}</span>
            </template>
            <template v-for="item in menu.children" :key="item.id">
              <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.name">
                <template #title>
                  <el-icon>
                    <component :is="item.icon"></component>
                  </el-icon>
                  <span>{{ item.name }}</span>
                </template>
                <el-menu-item v-for="item1 in item.children" :index="item1.path" :key="item1.id">
                  <el-icon>
                    <component :is="item1.icon"></component>
                  </el-icon>
                  <span>{{ item1.name }}</span>
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="item.path">
                <el-icon>
                  <component :is="item.icon"></component>
                </el-icon>
                <span>{{ item.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
          <el-menu-item v-else :index="menu.path">
            <el-icon>
              <component :is="menu.icon"></component>
            </el-icon>
            <span>{{ menu.name }}</span>
          </el-menu-item>
        </template>
      </el-scrollbar>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.aside {
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(16 18 27 / 1%);
  overflow: hidden;

  .img-logo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    background-color: #5046e5;

    img {
      width: 30px;
      height: 30px;
    }
  }

  // 鼠标 hover 时颜色

  .el-menu {
    border: none !important;
    user-select: none;
    box-sizing: border-box;
    transition: width 0.4s linear;
    padding: 6px;
    height: 100%;

    .arrowhidden {
      ::v-deep .el-sub-menu__icon-arrow {
        display: none;
      }
    }

    .el-menu-item,
    .el-sub-menu {
      .el-icon {
        width: 1em;
        margin-left: -2px;
        margin-right: 16px;
      }
    }

    span {
      color: rgb(44 56 74 / 68%);
    }
  }
}
</style>
