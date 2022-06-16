 <template>
 <el-row :gutter="20">
    <el-col :span="5">
		<img :src="album.blurPicUrl" alt="" class="img">
		</el-col>
    <el-col :span="19">
		<h2>{{album.name}}</h2>
	<p  class="description">	简介：{{album.description}}</p>
		</el-col>
  </el-row>
</template>

<script>
 export default { name: 'Top', }
</script>
<script setup>
import { useState } from '@/hooks/useVuex'
const { album } = useState('albumDetail', ['album'])
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
	height: 166px;
	overflow: hidden;
}
</style>
