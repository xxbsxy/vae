<template>
  <PlayList :songs='songs'/>
</template>

<script>
import PlayList from '@/components/common/PlayList.vue'
 export default { name: 'Songs', }
</script>
<script setup>
import { useState } from '@/hooks/useVuex'
const {songs}=useState('songListDetail',['songs']) //全部歌曲

</script>
<style scoped lang='less'>

</style>