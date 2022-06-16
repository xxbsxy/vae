<template>
  <Comment :comments='comments'/>
</template>

<script>
export default { name: 'Comment' }
</script>
<script setup>
import Comment from '@/components/common/Comment.vue'
import { useState } from '@/hooks/useVuex'
const { comments } = useState('songListDetail', ['comments'])//评论数据
</script>
<style scoped lang='less'>
</style>