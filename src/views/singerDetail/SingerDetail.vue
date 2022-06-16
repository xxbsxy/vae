<template>
  <el-row :gutter="20">
    <el-col :span="5">
      <img :src="artist.picUrl" alt class="img"  />
    </el-col>
    <el-col :span="19">
      <h2>{{artist.name}}</h2>
			<p class="brief">{{artist.briefDesc}}</p>
    </el-col>
  </el-row>
	<h3>热门歌曲</h3>
 <PlayList :songs='hotSongs'/>
</template>

<script>
export default { name: 'SingerDetail' }
</script>
<script setup>
import PlayList from '@/components/common/PlayList.vue'
import { useState} from '@/hooks/useVuex'
import { onMounted } from 'vue';
import {useRoute} from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const { artist } = useState('singerDetail', ['artist']) //歌手描述
const { hotSongs } = useState('singerDetail', ['hotSongs']) //热门歌曲
onMounted(()=>{
		store.dispatch('singerDetail/getSingerDetail',route.query.id)
})
</script>
<style scoped lang='less'>
.img {
  width: 240px;
  height: 220px;
  border-radius: 10px;
}
.brief{
	width: 800px;
	height: 148px;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>