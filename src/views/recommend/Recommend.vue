<template>
<h2 >推荐歌单</h2>
<song-list :songLists='recommendSongList'/>
<h2>推荐歌曲</h2>
<play-list :songs='recommendSongs'/>
</template>

<script>
 export default { name: 'Recommend', }
</script>
<script setup>
import PlayList from '@/components/common/PlayList.vue';
import SongList from '@/components/common/SongList';

import { onMounted } from 'vue';
import { useStore } from 'vuex'
import { useState } from '@/hooks/useVuex'
const store = useStore()
const {recommendSongs}=useState('recommend',['recommendSongs'])
const {recommendSongList}=useState('recommend',['recommendSongList'])

onMounted(() => {
	store.dispatch('recommend/getRecommendSong')
	store.dispatch('recommend/getRecommendSongList')

})
</script>
<style scoped lang='less'>
h2{
	margin-top: 20px;
	margin-left: 10px;
}
</style>