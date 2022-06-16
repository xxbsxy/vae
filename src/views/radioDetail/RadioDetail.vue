<template>
<el-row :gutter="20">
    <el-col :span="5">
      <img :src="radioDetail.picUrl" alt class="img"  />
    </el-col>
    <el-col :span="19">
      <h2>{{radioDetail.name}}</h2>
			<p class="brief">简介：{{radioDetail.rcmdText}}</p>
    </el-col>
  </el-row>
	<h2>节目列表</h2>
	<radio-program/>
</template>

<script>
 export default { name: 'RadioDetail', }
</script>
<script setup>
import { onMounted } from 'vue';
import RadioProgram from './RadioProgram.vue';
import {useRoute} from 'vue-router'
import { useStore } from 'vuex'
import { useState } from '@/hooks/useVuex'
const store = useStore()
const route = useRoute()
const {radioPrograms}=useState('radio',['radioPrograms'])
const {radioDetail}=useState('radio',['radioDetail'])


onMounted(() => {
	store.dispatch('radio/getRadioDetail',route.query.id)
	store.dispatch('radio/getRadioProgram',route.query.id)

})
</script>
<style scoped lang='less'>
.img {
  width: 240px;
  height: 220px;
  border-radius: 10px;
}
</style>