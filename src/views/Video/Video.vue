<template>
 <MvList :mvs='videos'/>
</template>

<script>
export default { name: 'Video' }
</script>
<script setup>
import  MvList  from '@/components/common/MvList.vue'
import { onMounted } from 'vue'
import { useState } from '@/hooks/useVuex'
import { useStore } from 'vuex'
const store = useStore()
const { videos } = useState('video', ['videos'])
onMounted(() => {
  store.dispatch('video/getVideo')
})
</script>
<style scoped lang='less'>
.img {
  width: 390px;
  height: 219px;
  border-radius: 10px;
	cursor: pointer;
  transition: all 0.3s ease;
  border: 5px solid rgb(247, 247, 247);
  &:hover {
    transform: scale(1.02);
    border: 5px solid transparent;
  }
}
p {
  width: 390px;
  text-align: center;
  margin-top: 10px;
	cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>