 <template>
 <el-row :gutter="20">
    <el-col :span="5">
		<img :src="songList.coverImgUrl" alt="" class="img">
		</el-col>
    <el-col :span="19">
		<h2>{{songList.name}}</h2>
		<!-- <div class="creator" >
			<el-avatar :src="songList.creator.avatarUrl" />
			<span class="nickname">{{songList.creator.nickname}}</span>
		</div> -->
		<div class="tag" v-if="songList">
			  标签：
			<span v-for="item in songList.tags">{{item}}</span>
		</div>
	<p v-if="songList.description" class="description">	简介：{{songList.description}}</p>
		</el-col>
  </el-row>
</template>

<script>
 export default { name: 'Top', }
</script>
<script setup>
import {useRoute} from 'vue-router'
import { useStore } from 'vuex'
import { useState } from '@/hooks/useVuex'
import {onMounted,watch} from 'vue';
const store = useStore()
const route = useRoute()
const {songList}=useState('songListDetail',['songList']) //歌单详情
watch(songList,(newValue)=>{
	store.dispatch('songListDetail/getAllSong',newValue.trackIds)
	store.dispatch('songListDetail/getSongListDetail',route.query.id)
})
onMounted(()=>{
	//发送获得歌单详情请求
	store.dispatch('songListDetail/getSongListDetail',route.query.id)
	store.dispatch('songListDetail/getComment',{id:route.query.id,type:2})
})

</script>
<style scoped lang='less'>
.img{
	width: 240px;
	height: 240px;
	border-radius: 10px;
}
.creator{
	.nickname{
		font-size: 14px;
		color: #507daf;
		vertical-align: 14px;
		margin-left: 8px;
		cursor: pointer;
		&:hover{
			color: #0b58b0;
		}
	}
}
.tag{
	span{
		margin-left: 6px;
	}
	margin-top: 10px;
}
.description{
	width: 800px;
	height: 140px;
	overflow: hidden;
}
</style>
