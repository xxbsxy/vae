<template>
<el-row :gutter="26">
    <el-col :span="4.5" v-for="item in props.songLists" :key="item.id">
		 <img :src="item.coverImgUrl||item.picUrl" alt="" class="img" @click="toSongListDetail(item.id)">
		 <p>{{item.name}}</p>
		</el-col>
  </el-row>
</template>

<script>
 export default { name: 'SongList', }
</script>
<script setup>
import { useRouter } from 'vue-router';
const props=defineProps({
	songLists:{
		type:Array,
		default(){
			return []
		}
	}
})
const router=useRouter()
const toSongListDetail=(id) => {

	router.push({
		path:'/songListDetail',
		query:{
			id
		}
	})
}

</script>
<style scoped lang='less'>
.img{
	 width: 220px;
	 height: 220px;
	 border-radius: 10px;
	 cursor: pointer;
	 transition: all 0.3s ease;
  border: 5px solid rgb(247, 247, 247);
  &:hover {
    transform: scale(1.02);
    border: 5px solid transparent;
  }
 }
 p{
	 width: 200px;
	 overflow: hidden;
	 white-space: nowrap;
	 text-overflow: ellipsis;
	 margin-top: 10px;
	 cursor: pointer;
 }
 </style>