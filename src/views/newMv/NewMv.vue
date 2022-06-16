<template>
  <mv-list :mvs='newMvs'/>
</template>

<script>
export default {
  components: { MvList }, name: 'NewMv' }
</script>
<script setup>
import MvList from '@/components/common/MvList.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { useState } from '@/hooks/useVuex'
const store = useStore()
const { newMvs } = useState('music', ['newMvs'])
onMounted(() => {
  store.dispatch('music/getNewMvs')
})
</script>
<style scoped lang='less'>

</style>