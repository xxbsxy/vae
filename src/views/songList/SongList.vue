<template>
	<song-list :songLists='songLists'/>
</template>

<script>
 export default { name: 'SongList', }
</script>
<script setup>
import SongList from '@/components/common/SongList'
import { onMounted } from 'vue';
import { useStore } from 'vuex'
import { useState } from '@/hooks/useVuex'
const store = useStore()
const {songLists}=useState('songList',['songLists']) //歌单
onMounted(() => {
	store.dispatch('songList/getSongList')
})
</script>
<style scoped lang='less'>
</style>