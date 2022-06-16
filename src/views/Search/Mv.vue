<template>
 <mv-list :mvs='result.mvs'/>
</template>

<script>
export default { name: 'Mv' }
</script>
<script setup>
import MvList from '@/components/common/MvList.vue'
import { useState } from '../../hooks/useVuex'
const { result } = useState('search', ['result']) //搜索结果
</script>
<style scoped lang='less'>

</style>