<template>
 <play-list :songs='albumSongs' :imgShow='false'/>
</template>

<script>
 export default { name: 'AlbumDteail', }
</script>
<script setup>
import PlayList from '../../components/common/PlayList.vue'
import { onMounted } from 'vue';
import {useRoute} from 'vue-router'
import { useStore } from 'vuex'
import { useState } from '@/hooks/useVuex'
const store = useStore()
const route = useRoute()
const {albumSongs}=useState('albumDetail',['albumSongs'])
onMounted(()=>{
	store.dispatch("albumDetail/getAlbumDetail",route.query.id)
})
</script>
<style scoped lang='less'>

</style>