<template>
<el-table :data="newSongs" style="width: 100%" @cell-dblclick="playMusic">
  <!-- 歌曲名 -->
    <el-table-column prop="name" label="歌曲名" width="460" >
			<template #default="scope">
			<img :src="scope.row.picUrl" alt="" class="pic">
		 <span>{{scope.row.name}}</span>	
			</template>
		</el-table-column>
		<!-- 歌手 -->
    <el-table-column  label="歌手" width="320" >
			<template #default="scope">
        <span v-for="(item,index) in scope.row.song.artists ">
           <span @click="toSingerDetail(item.id)" class="singer">{{item.name}}</span>
          <span v-show="index<scope.row.song.artists.length-1">/</span>
        </span>
      </template>
		</el-table-column>
		<!-- 专辑 -->
    <el-table-column prop="song.album.name" label="专辑" width="320">
			<template #default="scope"> 
			 <span @click="toAlbumDetail(scope.row.song.album.id)" class="albumName">{{scope.row.song.album.name}}</span>
			  </template>
		</el-table-column>
		<!-- 时间 -->
    <el-table-column prop="duration" label="时长" >
			<template #default="scope">{{time(scope.row.song.duration)}}</template>
		</el-table-column>

  </el-table>
</template>

<script>
 export default { name: 'NewSong', }
</script>
<script setup>
import { useState } from '../../../hooks/useVuex'
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
const router = useRouter()
const store = useStore()
const { newSongs } = useState('music', ['newSongs'])//最新音乐数据
const time = mss => {
  let minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((mss % (1000 * 60)) / 1000)
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds
  return minutes + ' : ' + seconds
}
const playMusic=(row) => {
	store.dispatch('footer/getSongUrl',row.id)
	store.dispatch('footer/getSongDetail',row.id)	
}
const toSingerDetail=(id) => {
   	router.push({
		path:'/singerDetail',
		query:{
			id
		}
	})
}
const toAlbumDetail=(id) => {
	router.push({
		path:'/albumDetail',
		query:{
			id
		}
	})
}
</script>
<style scoped lang='less'>
.pic {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  vertical-align: -13px;
  margin-right: 14px;
}
span{
	color: black;
}
.play{
	margin-top: 5px;
}
.singer ,.albumName{
  cursor: pointer;
  &:hover {
    color: #6ca5fe;
  }
}
</style>