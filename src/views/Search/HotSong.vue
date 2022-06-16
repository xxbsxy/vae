<template>
 <PlayList :songs='result.songs'/>
</template>

<script>
 export default { name: 'HotSong', }
</script>
<script setup>
import PlayList from '@/components/common/PlayList.vue'
import { useState } from '../../hooks/useVuex'
const {result}=useState('search',['result'])//搜索结果
</script>
<style scoped lang='less'>

</style>