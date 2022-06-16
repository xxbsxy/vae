<template>
  <Comment :comments='comments'/>
</template>

<script>
 export default { name: 'Comment', }
</script>
<script setup>
import Comment from '@/components/common/Comment.vue'
import { onMounted } from 'vue';
import {useRoute} from 'vue-router'
import { useStore } from 'vuex'
import { useState } from '@/hooks/useVuex'
const store = useStore()
const route = useRoute()
const { comments } = useState('songListDetail', ['comments'])
onMounted(()=>{
	store.dispatch('songListDetail/getComment',{id:route.query.id,type:3})
})
</script>
<style scoped lang='less'>

</style>