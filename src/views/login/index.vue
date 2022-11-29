<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'

import type { LoginFormType } from './type/login'
import { login } from '@/api/login'

// 定义表单数据
const loginForm = reactive<LoginFormType>({
  username: 'admin',
  password: '123456',
})

// 定义校验规则
const loginRules: FormRules = {
  username: [
    {
      required: true,
      message: '必须输入账号信息',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '必须输入密码',
      trigger: 'blur',
    },
    {
      min: 6,
      max: 18,
      message: '请输入6-18位密码',
      trigger: 'blur',
    },
  ],
}

// 执行账号登录逻辑
const loginFormRef = ref<FormInstance>()
const submitAction = () => {
  loginFormRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      try {
        const name = loginForm.username
        const password = loginForm.password
        login({ name, password }).then((res) => {
          console.log(res)
        })
        ElMessage.success('成功信息')
      } catch (e) {
        console.log(e)
      }
    } else {
      ElMessage.error('错误信息')
    }
  })
}
</script>

<template>
  <div class="login">
    <div class="main-img">
      <img src="../../assets/img/svg-img.svg" alt="" />
    </div>
    <div class="login-form">
      <el-form ref="loginFormRef" status-icon :model="loginForm" :rules="loginRules">
        <div class="login-title">后台管理系统</div>
        <el-form-item prop="username">
          <el-input placeholder="请输入账号" v-model="loginForm.username" :prefix-icon="User" clearable></el-input>
          <!-- <span>账号</span> -->
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" show-password type="password" :prefix-icon="Lock" v-model="loginForm.password">
          </el-input>
          <!-- <span>密码</span> -->
        </el-form-item>
        <div class="login-control">
          <el-checkbox label="记住密码" size="large" />
          <el-checkbox label="自动登录" size="large" />
        </div>
        <el-form-item class="login-button">
          <el-button type="primary" @click="submitAction">立即登录</el-button>
        </el-form-item>
        <div class="forget-password">
          <el-link type="primary">忘记密码</el-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
  box-sizing: border-box;
  overflow: hidden;

  .main-img {
    display: flex;
    align-items: center;
    width: 60vw;
    height: 100vh;
  }

  .login-form {
    width: 400px;
    height: 450px;
    border-radius: 15px;
    padding: 15px;
    background-color: rgba(16 18 27 / 5%);
    box-shadow: 1px 1px 8px #aaa6a6;

    .el-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .el-input {
      width: 350px;
      border-radius: 4px;
      color: #333;
      background-color: transparent;

      input {
        background-color: #aaa6a6;
      }
    }

    .login-control {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 0 25px;
    }

    .login-title {
      display: flex;
      justify-content: center;
      margin-bottom: 35px;
      font-size: 24px;
      color: #444;
      letter-spacing: 4px;
    }

    .login-button {
      width: 100%;
      box-sizing: border-box;
      padding: 0 25px;

      .el-button {
        width: 100%;
        margin-top: 15px;
        margin-bottom: 15px;
        border-radius: 30px;
      }
    }

    .forget-password {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 0 35px;
    }
  }
}
</style>
