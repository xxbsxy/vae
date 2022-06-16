<template>
  <div class="title">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-button class="btn1" @click="toRecommend">每日推荐</el-button>
      </el-col>
      <el-col :span="6">
        <el-button class="btn2" @click="toNewMv">最新MV</el-button>
      </el-col>
      <el-col :span="6">
        <el-button class="btn3" @click="toRank">排行榜</el-button>
      </el-col>
      <el-col :span="6">
        <el-button class="btn4" @click="toSinger">歌手</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default { name: 'Title' }
</script>
<script setup>
import { useRouter } from 'vue-router';
const router=useRouter()

const toRecommend=() => {
		router.push({
		path:'/recommend'
	})
}

const toNewMv=() => {
	router.push({
		path:'/newMv'
	})
}
const toRank=() => {
	router.push({
		path:'/rank'
	})
}
const toSinger=() => {
	router.push({
		path:'/singer'
	})
}
</script>
<style scoped lang='less'>
.title {
  margin-left: 40px;
	margin-top: 10px;
  .btn1,
  .btn2,
  .btn3,
  .btn4 {
    width: 240px;
    text-align: center;
    border-radius: 20px;
    height: 42px;
    line-height: 42;
    color: white;
  }
  .btn1 {
    background-color: #409eff;
		&:hover{
			background-color: #79bbff;
		}
  }
  .btn2 {
    background-color: #ff98a5;
		&:hover{
			background-color: #ffb7c0;
		}
  }
  .btn3 {
    background-color: #626aef;
		&:hover{
			background-color: #9197f4;
		}
  }
  .btn4 {
    background-color: #eba5f0;
		&:hover{
			background-color: #f1c0f5;
		}
  }
}
</style>