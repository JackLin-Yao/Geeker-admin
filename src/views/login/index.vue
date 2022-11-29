<script setup lang="ts"></script>

<template>
  <div class="login">
    <div class="main-img">
      <img src="../../assets/img/svg-img.svg" alt="" />
    </div>
    <div class="login-form">
      <el-form>
        <div class="login-title">后台管理系统</div>
        <el-form-item prop="username">
          <el-input placeholder="请输入账号"></el-input>
          <!-- <span>账号</span> -->
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码"> </el-input>
          <!-- <span>密码</span> -->
        </el-form-item>
        <div class="login-control">
          <el-checkbox label="记住密码" size="large" />
          <el-checkbox label="自动登录" size="large" />
        </div>
        <el-form-item class="login-button">
          <el-button type="primary">立即登录</el-button>
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
    width: 60vw;
    height: 100vh;
    margin-top: 250px;
  }

  .login-form {
    width: 380px;
    height: 400px;
    border-radius: 4px;
    padding: 10px;
    background-color: rgba(16 18 27 / 6%);
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
      justify-content: space-betweens;
      width: 100%;
      box-sizing: border-box;
      padding: 0 15px;
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
      padding: 0 15px;
    }
  }
}
</style>
