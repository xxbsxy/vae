<template>
  <song-list :songLists='songLists'/>
</template>

<script>
export default { name: 'SongList' }
</script>
<script setup>
import SongList from '@/components/common/SongList'
import { useState } from '../../../hooks/useVuex'
const { songLists } = useState('music', ['songLists']) //推荐歌单数据

</script>
<style scoped lang='less'>

</style>