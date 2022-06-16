<template>
 <!-- 播放列表 -->
  <el-table :data="props.songs" style="width: 100%" @cell-dblclick="playMusic" >
    <!-- 歌曲名 -->
    <el-table-column prop="name" label="歌曲名" width="460">
      <template #default="scope">
        <img :src="scope.row.al.picUrl" alt class="pic" v-show="props.imgShow"/>
        <span>{{scope.row.name}}</span>
      </template>
    </el-table-column>
    <!-- 歌手 -->
    <el-table-column label="歌手" width="320">
      <template #default="scope">
        <span v-for="(item,index) in scope.row.ar ">
          <span class="singer" @click="toSingerDetail(item.id)">{{item.name}}</span>
          <span v-show="index<scope.row.ar.length-1">/</span>
        </span>
      </template>
    </el-table-column>
    <!-- 专辑 -->
    <el-table-column prop="al.name" label="专辑" width="320" >
			 <template #default="scope"> 
			 <span @click="toAlbumDetail(scope.row.al.id)" class="albumName">{{scope.row.al.name}}</span>
			  </template>
		</el-table-column>
    <!-- 时间 -->
    <el-table-column prop="duration" label="时长" >
      <template #default="scope">{{time(scope.row.dt)}}</template>
    </el-table-column>
  </el-table>
</template>

<script>
export default { name: 'PlayList' }
</script>
<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const props=defineProps({
	songs:{
		type:Array,
		default(){
			return []
		}
	},
	imgShow:{
		type:Boolean,
		default:true
	}
})
//计算时间 将毫秒转化为时分
const time = mss => {
  let minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((mss % (1000 * 60)) / 1000)
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds
  return minutes + ' : ' + seconds
}
const playMusic = row => {
	console.log(row.id);
  store.dispatch('footer/getSongUrl', row.id)
  store.dispatch('footer/getSongDetail', row.id)
}
const toAlbumDetail=(id) => {
	router.push({
		path:'/albumDetail',
		query:{
			id
		}
	})
}
const toSingerDetail = id => {
  router.push({
    path: '/singerDetail',
    query: {
      id,
    },
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
span {
  color: black;
}
.play {
  margin-top: 5px;
}
.singer ,.albumName{
  cursor: pointer;
  &:hover {
    color: #6ca5fe;
  }
}

</style>