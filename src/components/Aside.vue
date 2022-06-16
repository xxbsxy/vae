<template>
  <h3>发现</h3>
  <li v-for="item in title" :key="item.name" @click="toModel(item.url)" class="list">
    <img :src="item.imgUrl" alt />
    {{item.name}}
  </li>
	<h5>创建的歌单 <span v-if="!userSongList">(登陆查看)</span></h5>
	<li v-for="item in userSongList" :key="item.id" @click="toSongListDetail(item.id)" class="userSongList">
    <img :src="item.coverImgUrl" alt />
      <p>{{item.name}}</p> 
  </li>
</template>

<script>
export default { name: 'Aside' }
</script>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useState } from '@/hooks/useVuex'
const store = useStore()
const router = useRouter()
const {userSongList}=useState('header',['userSongList'])

const title = reactive([
  {
    name: '乐库',
    url: '/music',
    imgUrl: require('../assets/img/Header/Music.svg'),
  },
  {
    name: '视频',
    url: '/video',
    imgUrl: require('../assets/img/Header/video.svg'),
  },
  {
    name: '电台',
    url: '/radio',
    imgUrl: require('../assets/img/Header/radio.svg'),
  },
  {
    name: '歌单',
    url: '/songList',
    imgUrl: require('../assets/img/Header/songList.svg'),
  },
])
//方法
//点击侧边栏到相关模块
const toModel = url => {
  router.push({
    path: url,
  })
}
const toSongListDetail=(id) => {
	store.dispatch('songListDetail/getSongListDetail',id)
	store.dispatch('songListDetail/getComment',{id,type:2})
	router.push({
		path:'/songlistDetail',
		query:{
			id
		}
		
		
	})
}
</script>
<style scoped lang='less'>
.list {
  list-style: none;
  margin-left: 20px;
  margin-top: 5px;
  cursor: pointer;
	border-radius: 6px;
  height: 35px;
  line-height: 35px;
  width: 160px;

  img {
    vertical-align: -4px;
    margin-right: 10px;
    margin-left: 10px;
  }
  &:hover {
    background-color: #dddfe1;
  }
}
.userSongList{
	  list-style: none;
		line-height: 40px;
    margin-left: 20px;
		margin-top: 10px;
		width: 160px;
		height: 40px;
		border-radius: 6px;
		cursor: pointer;
		display: flex;
		&:hover {
    background-color: #dddfe1;
  }
	img{
		width: 40px;
		height: 40px;
		border-radius: 5px;
		}
		p{
			margin-top: 1px;
			font-size: 14px;
			width: 100px;
			height: 35px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
      margin-left: 5px;
		}

	
}

h3,h5 {
  margin-left: 15px;
}
h5{
	color: #6f6f6f;
}

</style>