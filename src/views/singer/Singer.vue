<template>
<h2>歌手</h2>
<el-row :gutter="25">
    <el-col :span="4.5" v-for="item in singers" :key="item.id">
		 <img :src="item.picUrl" alt="" class="img" @click="toSongListDetail(item.id)" >
		 <p>{{item.name}}</p>
		</el-col>
  </el-row>
</template>

<script>
 export default { name: 'Singer', }
</script>
<script setup>
import { onMounted } from 'vue';
import {useRouter} from 'vue-router'
import { useStore } from 'vuex'
import { useState } from '@/hooks/useVuex'
const store = useStore()
const router = useRouter()
const {singers}=useState('music',['singers'])
//点击歌手图片到歌手详情
const toSongListDetail=(id) => {
	router.push({
		path:'/singerDetail',
		query:{
			id
		}
	})
}
onMounted(()=>{
	store.dispatch('music/getSingers')
})
</script>
<style scoped lang='less'>
.img{
	 width: 220px;
	 height: 210px;
	 border-radius: 50%;
	 cursor: pointer;
	 transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
 }
 p{
	 width: 200px;
	 overflow: hidden;
	 white-space: nowrap;
	 text-overflow: ellipsis;
	 margin-top: 10px;
	 cursor: pointer;
	 text-align: center;
 }
</style>