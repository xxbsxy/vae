<template>
<el-tabs  class="demo-tabs" @tab-change="handleChange" v-model="activeName" >
    <el-tab-pane v-for="item in titleList" :label="item.label" :name="item.type" :key="item.type"></el-tab-pane>
  </el-tabs>
	<router-view></router-view>
</template>

<script>
 export default { name: 'Main', }
</script>
<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { ref,reactive,onMounted} from 'vue';
const store = useStore()
const router=useRouter()
const titleList=reactive([
	{label:'最新音乐',type:1,url:'/music/newSong'},
	{label:'歌单',type:1000,url:'/music/songList'},
	{label:'MV',type:1004,url:'/music/mv'},
])
let activeName=ref(1) //活跃tab的Name
const handleChange=(name) => {
		const arr=titleList.filter(item=>{
		return item.type===name
	})
	router.push({
		path:arr[0].url,
	})
}
onMounted(()=>{
	store.dispatch('music/getNewSongs')
	store.dispatch('music/getSongLists')
	store.dispatch('music/getMvs')
})
</script>
<style scoped lang='less'>
.demo-tabs{
	margin-top: 20px;
}
</style>