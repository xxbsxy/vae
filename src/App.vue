<template>
  <div class="app">
    <el-card class="box-card">
      <div class="common-layout">
        <el-container>
          <!-- 头部区域 -->
          <el-header class="header">
            <Header></Header>
          </el-header>
          <el-container>
            <!-- 侧边栏 -->
            <el-aside class="aside">
              <Aside></Aside>
            </el-aside>
            <el-container>
              <!-- 主体区域 -->
              <el-main class="main">
                <router-view></router-view>
              </el-main>
              <!-- 尾部区域 -->
              <el-footer class="footer">
                <Footer></Footer>
              </el-footer>
            </el-container>
          </el-container>
        </el-container>
      </div>
    </el-card>
  </div>
</template>


<script setup>

import Header from './components/Header.vue'
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import Footer from './components/Footer.vue'
</script>
<style scoped lang='less'>
@import './assets/css/base.css';
@import './assets/css/globe.css';
.app {
  padding: 80px;
  background-color: #edeef3;
  .box-card {
    border-radius: 30px;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(163, 163, 163, 0.4);
      background: rgba(147, 147, 147, 0.2);
    }
    .header {
      height: 58px;
      border-bottom: 1px solid rgb(226, 226, 226);
    }
    .aside {
      width: 200px;
      border-right: 1px solid rgb(226, 226, 226);
    }
    .main {
      height: 680px;
    }
    .footer {
      border-top: 1px solid rgb(226, 226, 226);
      height: 80px;
    }
  }
}
</style>