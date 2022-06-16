<template>
<h2>{{route.query.keywords}}</h2>
<el-tabs  class="demo-tabs" @tab-change="handleChange" v-model="activeName">
    <el-tab-pane v-for="item in titleList" :label="item.label" :name="item.type" :key="item.type"></el-tab-pane>
  </el-tabs>
	<router-view></router-view>
</template>

<script>
 export default { name: 'Search', }
</script>
<script setup>
import {useRoute,useRouter} from 'vue-router'
import { ref,reactive,onMounted} from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const router = useRouter()
const titleList=reactive([
	{label:'热门歌曲',type:1,url:'/search/hotSong'},
	{label:'歌单',type:1000,url:'/search/songList'},
	{label:'MV',type:1004,url:'/search/mv'},
	{label:'专辑',type:10,url:'/search/album'},
])
let activeName=ref(1) //活跃tab的Name

//点击tab跳转到相关的模块
const handleChange=(name) => {
	const arr=titleList.filter(item=>{
		return item.type===name
	})
	activeName.value=arr.type
	router.push({
		path:arr[0].url,
		query:{
			keywords:route.query.keywords,
			type:name
		}
	})
	//发送请求获得搜索结果
	store.dispatch('search/getSearch',{keywords:route.query.keywords,type:name})
}
onMounted(()=>{
	store.dispatch('search/getSearch',{keywords:route.query.keywords,type:name})
})
</script>
<style scoped lang='less'>

</style>