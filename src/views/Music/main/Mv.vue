<template>
  <mv-list :mvs='mvs'/>
</template>

<script>
export default { name: 'Mv' }
</script>
<script setup>
import MvList from '@/components/common/MvList.vue'
import { useState } from '../../../hooks/useVuex'
const { mvs } = useState('music', ['mvs']) //Mv数据
</script>
<style scoped lang='less'>

</style>