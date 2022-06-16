<template>

<el-tabs  class="demo-tabs" @tab-change="handleChange" v-model="activeName" >
    <el-tab-pane v-for="item in titleList" :label="item.label" :name="item.type" :key="item.type"></el-tab-pane>
  </el-tabs>

  
</template>

<script>
 export default { name: 'Tab', }
</script>
<script setup>
import { ref,reactive } from 'vue';
import {useRouter,useRoute} from 'vue-router'
const router = useRouter()
const route = useRoute()

let activeName=ref(1)
const titleList=reactive([
	{label:'歌曲',type:1,url:'/songListDetail/songs'},
	{label:'评论',type:2,url:'/songListDetail/comment'},
])
//点击tab跳转到歌曲或者评论
const handleChange=(name) => {
		const arr=titleList.filter(item=>{
		return item.type===name
	})
	router.push({
		path:arr[0].url,
		query:{
			id:route.query.id
		}
	})
}
</script>
<style scoped lang='less'>
.demo-tabs{
	margin-top: 20px;
		margin-left: 14px;
}
</style>