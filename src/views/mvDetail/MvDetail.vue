<template>
<video :src="mvUrl.url" class="video" controls></video>
<h2>{{mvDetail.name}}-{{mvDetail.artistName}}</h2>
<Comment :comments="comments"/>
</template>

<script>
 export default { name: 'MvDetail', }
</script>
<script setup>
import { onMounted } from 'vue';
import Comment from '@/components/common/Comment.vue'
import {useRoute} from 'vue-router'
import { useStore } from 'vuex'
import { useState } from '@/hooks/useVuex'
const store = useStore()
const route = useRoute()
const {mvUrl}=useState('mvDetail',['mvUrl'])
const {mvDetail}=useState('mvDetail',['mvDetail'])
const {comments}=useState('songListDetail',['comments'])


onMounted(() => {
	store.dispatch('mvDetail/getMvUrl',route.query.id)
	store.dispatch('mvDetail/getMvDetail',route.query.id)
  store.dispatch('songListDetail/getComment',{id:route.query.id,type:1})
})
</script>
<style scoped lang='less'>
.video{
	height: 100%;
	margin-left: 50px;
	border-radius: 15px;
}
h2{
	margin-left: 50px;
	margin-bottom: 50px;
}
</style>