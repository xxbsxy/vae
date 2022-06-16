<template>
  <el-row :gutter="20">
    <el-col :span="8" v-for="item in props.mvs" :key="item.id">
      <img :src="item.cover" alt class="img" @click="toMvDetail(item.id)" />
      <p>{{item.name}}</p>
    </el-col>
  </el-row>
</template>

<script>
export default { name: 'MvList' }
</script>
<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const props=defineProps({
	mvs:{
		type:Array,
		default(){
			return []
		}
	}
})
const toMvDetail=(id) => {
	router.push({
		path:'/mvDetail',
		query:{
			id
		}
	})
}
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>