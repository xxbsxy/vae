<template>
<h2>排行榜</h2>
 <song-list :songLists='ranks'/>
</template>

<script>
 export default { name: 'Rank', }
</script>
<script setup>
import SongList from '@/components/common/SongList.vue';
import { onMounted } from 'vue';
import { useState } from '../../hooks/useVuex'
import { useStore } from 'vuex'
const store = useStore()
const {ranks}=useState('music',['ranks'])//搜索结果
onMounted(()=>{
	store.dispatch('music/getTopList')
})
</script>
<style scoped lang='less'>

</style>