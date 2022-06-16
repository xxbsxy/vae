<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in radioBanner" :key="item.targetId">
      <img :src="item.pic" alt class="pic" />
    </el-carousel-item>
  </el-carousel>
  <h2>推荐电台</h2>
 <el-row :gutter="26">
    <el-col :span="4.5" v-for="item in radios" :key="item.id">
		 <img :src="item.coverImgUrl||item.picUrl" alt="" class="img" @click="toRidaoDetail(item.id)">
		 <p>{{item.name}}</p>
		</el-col>
  </el-row>
</template>

<script>
export default { name: 'Radio' }
</script>
<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { useState } from '@/hooks/useVuex'
import {useRouter} from 'vue-router'
const router = useRouter()
const store = useStore()
const { radios } = useState('radio', ['radios'])
const { radioBanner } = useState('radio', ['radioBanner'])

const toRidaoDetail=(id) => {
	router.push({
		path:'/radioDetail',
		query:{
			id
		}
	})
}
onMounted(() => {
  store.dispatch('radio/getRadio'), store.dispatch('radio/getRadioBanner')
})
</script>
<style scoped lang='less'>
.pic{
width: 550px;
height: 220px;
margin-left: 40px;
}

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