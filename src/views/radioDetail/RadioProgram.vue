<template>
<el-table :data="radioPrograms" style="width: 100%" :show-header="false" >
<!-- 专辑名称 -->
    <el-table-column  width="700" >
	<template #default="scope">
			<img :src="scope.row.radio.intervenePicUrl" alt="" class="pic">
		 <span>{{scope.row.mainSong.name}}</span>	
			</template>
		</el-table-column>
		<!-- 专辑发布时间 -->
		<el-table-column  width="400">
			<template #default="scope">
		 <span>{{formatDate(scope.row.createTime)}}</span>	
			</template>
		</el-table-column>
		<!-- 专辑歌曲数目 -->
		  <el-table-column  >
			<template #default="scope">
		 <span>{{time(scope.row.duration)}}</span>	
			</template>
		</el-table-column>
    
  </el-table>
</template>

<script>
 export default { name: 'RadioProgram', }
</script>
<script setup>
import { computed } from 'vue';
import { useState } from '@/hooks/useVuex'
const {radioPrograms}=useState('radio',['radioPrograms'])
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
//计算时间 将毫秒转化为时分
const time = mss => {
  let minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((mss % (1000 * 60)) / 1000)
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds
  return minutes + ' : ' + seconds
}
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