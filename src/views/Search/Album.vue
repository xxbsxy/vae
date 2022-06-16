<template>
<el-table :data="result.albums" style="width: 100%" :show-header="false" @cell-click="toAlbumDetail">
<!-- 专辑名称 -->
    <el-table-column  width="500" >
	<template #default="scope">
			<img :src="scope.row.picUrl" alt="" class="pic">
		 <span>{{scope.row.name}}</span>	
			</template>
		</el-table-column>
		<!-- 歌手名称 -->
    <el-table-column   width="300" >
			<template #default="scope">
		 <span>{{scope.row.artist.name}}</span>	
			</template>
		</el-table-column>
		<!-- 专辑发布时间 -->
		<el-table-column  width="300">
			<template #default="scope">
		 <span>{{formatDate(scope.row.publishTime)}}</span>	
			</template>
		</el-table-column>
		<!-- 专辑歌曲数目 -->
		  <el-table-column  >
			<template #default="scope">
		 <span>{{scope.row.size}}首</span>	
			</template>
		</el-table-column>
    
  </el-table>
</template>

<script>
 export default { name: 'Album', }
</script>
<script setup>
import { onMounted } from 'vue';
import { useState } from '../../hooks/useVuex'
import { useStore } from 'vuex'
import { computed } from 'vue';
import {useRouter,useRoute} from 'vue-router'
const router = useRouter()
const route = useRoute()
const store = useStore()
const { result } = useState('search', ['result']) //搜索结果
//转化时间戳
 const formatDate= computed(()=>value=>{
        let date = new Date(value )
        let y = date.getFullYear()
        let MM = date.getMonth() + 1
        MM = MM < 10 ? ('0' + MM) : MM
        let d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        let h = date.getHours()
        h = h < 10 ? ('0' + h) : h
        let m = date.getMinutes()
        m = m < 10 ? ('0' + m) : m
        let s = date.getSeconds()
        s = s < 10 ? ('0' + s) : s
        return y + '-' + MM + '-' + d 
})
//点击专辑名称到专辑详情
const toAlbumDetail=(row) => {
	router.push({
		path:'/albumDetail',
		query:{
			id:row.id
		}
	})
}
onMounted(() => {
	store.dispatch('search/getSearch',{keywords:route.query.keywords,type:route.query.type})
})
</script>
<style scoped lang='less'>
.pic{
	width: 60px;
	height: 60px;
	border-radius: 4px;
	vertical-align: -24px;
	margin-right: 18px;
}
</style>