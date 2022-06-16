<template>
  <h3>精彩评论</h3>
  <div v-for="item in props.comments" :key="item.id" class="comment">
    <div>
      <img :src="item.user.avatarUrl" alt class="img" />
    </div>
    <div class="comment-item">
      <p class="nickname">{{item.user.nickname}}</p>
      <p class="time">{{formatDate(item.time)}}</p>
      <p class="content">{{item.content}}</p>
      <div class="zan">
        <img src="@/assets/img/songList/zan.svg" alt />
        <span>{{item.likedCount}}</span>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
export default { name: 'Comment' }
</script>
<script setup>
import { computed } from 'vue'
const props=defineProps({
	comments:{
		type:Array,
		default(){
			return []
		}
	},

})
const formatDate = computed(() => value => {
  let date = new Date(value)
  let y = date.getFullYear()
  let MM = date.getMonth() + 1
  MM = MM < 10 ? '0' + MM : MM
  let d = date.getDate()
  d = d < 10 ? '0' + d : d
  let h = date.getHours()
  h = h < 10 ? '0' + h : h
  let m = date.getMinutes()
  m = m < 10 ? '0' + m : m
  let s = date.getSeconds()
  s = s < 10 ? '0' + s : s
  return y + '-' + MM + '-' + d + ' ' + h + ':' + m
})

</script>
<style scoped lang='less'>
.comment {
  border-bottom: 1px solid rgb(218, 218, 218);
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  .comment-item {
    margin-top: 5px;
    margin-left: 10px;
  }
  .nickname {
    font-size: 14px;
    color: rgb(88, 88, 88);
  }
  .time {
    font-size: 14px;
    color: rgb(88, 88, 88);
    margin-top: -4px;
  }
  .content {
    margin-top: 18px;
    font-size: 16px;
  }
  .img {
    width: 50px;
    height: 50px;
    margin-top: 15px;
    border-radius: 50%;
  }
}
h3 {
  font-weight: 500;
  margin-left: 20px;
}
.zan{
	margin-bottom: 20px;
	cursor: pointer;
	img{
		vertical-align: -4px;
		margin-right: 5px;
		
	}
}
</style>