<template>
	<song-list :songLists='result.playlists'/>
</template>
<script>
export default { name: 'SongList' }
</script>
<script setup>
import SongList from '@/components/common/SongList'
import { useState } from '../../hooks/useVuex'
const { result } = useState('search', ['result']) //搜索结果
</script>
<style scoped lang='less'>
</style>