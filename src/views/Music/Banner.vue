<template>
   <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in banners" :key="item.targetId">
     <img :src="item.imageUrl" alt="" class="img">
    </el-carousel-item>
  </el-carousel>
	

</template>

<script>
 export default { name: 'Banner', }
</script>
<script setup>
import { useState } from '@/hooks/useVuex'
import { onMounted } from 'vue';
import { useStore } from 'vuex'
const { banners } = useState('music', ['banners'])//轮播图数据
const store = useStore()
onMounted(()=>{
	store.dispatch('music/getBanners')
})
</script>
<style scoped lang='less'>
.img{
width: 550px;
height: 220px;
margin-left: 40px;
}

</style>