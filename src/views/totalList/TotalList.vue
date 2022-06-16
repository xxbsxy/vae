<template>
<h3>播放列表</h3>
<play-list :songs='totalList'/>
</template>

<script>
 export default { name: 'TotalList', }
</script>
<script setup>
import PlayList from '@/components/common/PlayList.vue';
import { useState } from '@/hooks/useVuex'

const {totalList}=useState('footer',['totalList'])//播放队列
</script>
<style scoped lang='less'>

</style>