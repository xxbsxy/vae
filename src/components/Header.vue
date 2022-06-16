<template>
  <!-- Logo -->
  <el-row :gutter="20" class="header-item">
    <el-col :span="3">
      <img src="../assets/img/Header/vae.jpg" alt class="img" />
   
    </el-col>
		<!-- 前进后退 -->
    <el-col :span="3">
      <ArrowLeftBold
        style="width: 1em; height: 1em; margin-right: 20px; margin-left: 20px "
        class="left"
        @click="back"
      />
      <ArrowRightBold style="width: 1em; height: 1em; " class="right" @click="forward" />
    </el-col>
		<!-- 搜素音乐 -->
    <el-col :span="10">
      <input
        type="text"
        placeholder="搜素音乐"
        class="search"
        v-model="keywords"
        @keydown.enter="toSearch"
      />
    </el-col>
		<!-- 用户头像姓名 -->
    <el-col :span="3" :offset="4">
      <div class="login" @click="dialogVisible = true" v-if="!user.avatarUrl">登录</div>
      <el-avatar :src="user.avatarUrl" v-if="user.avatarUrl" class="avatar" />
      <span class="nickname">{{user.nickname}}</span>
    </el-col>
  </el-row>
  <!-- 登录界面 -->
  <el-dialog v-model="dialogVisible" title="登录" width="30%">
    <el-form label-position="right" label-width="100px" :model="loginForm" style="max-width: 360px">
      <el-form-item label="手机号">
        <el-input v-model="loginForm.phone" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password" width="250px" type='password'/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="login">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default { name: 'Header' }
</script>
<script setup>
import { ArrowLeftBold, ArrowRightBold, Search } from '@element-plus/icons-vue'
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useState } from '@/hooks/useVuex'
const store = useStore()
const router = useRouter()
const { user } = useState('header', ['user'])
const loginForm = reactive({
  phone: '15905876135',
  password: '1808298593',
})
let keywords = ref('')
let dialogVisible = ref(false)
//方法
//按回车键搜索
const toSearch = () => {
  router.push({
    path: '/search',
    query: {
      keywords: keywords.value,
    },
  })
  //发送搜索请求
  store.dispatch('search/getSearch', { keywords: keywords.value, type: 1 })
}
//点击确定登录
const login = () => {
  store.dispatch('header/getUser', loginForm)
  dialogVisible.value = false
}
//后退
const back = () => {
  router.go(-1)
}
// 前进
const forward = () => {
  router.go(1)
}
watch(user,newValue=>{
  store.dispatch('header/getUserSongList', newValue.userId)
})
</script>
<style scoped lang='less'>
.search {
  width: 250px;
  height: 32px;
  outline: none;
  padding-left: 60px;
  background-image: url(../assets/img/Header/search.svg);
  background-repeat: no-repeat;
  background-position: 25px 5px;
  border: transparent;
  border-radius: 20px;
  background-color: rgb(244, 244, 244);
  margin-top: -2px;
}
.header-item {
  margin-top: 14px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin-left: 10px;
  }
  span {
    vertical-align: 8px;
    margin-left: 5px;
    font-size: 20px;
  }
  .nickname {
    vertical-align: 20px;
    margin-left: 7px;
    font-size: 16px;
  }
  .login {
    margin-top: 5px;
    cursor: pointer;
  }
  .right,
  .left {
    cursor: pointer;
    margin-top: 5px;
  }
}
</style>