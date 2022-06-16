<template>
  <audio :src="currentPlayUrl.url" ref="audio" @canplay="getDuration" @timeupdate="timeupdate"></audio>
  <div class="footer">
    <div class="left">
      <img :src="currentInfoList.al.picUrl" alt class="pic" />
      <div class="name">
        <p>{{currentInfoList.name}}</p>
        <span v-for="item in currentInfoList.ar">{{item.name}}&nbsp;</span>
      </div>
    </div>
    <!-- 播放下一首等按钮 -->
    <div class="icon">
      <img src="@/assets/img/footer/orderPlay.svg" alt @click="orderPlay" class="order-play" />
      <img src="@/assets/img/footer/radomplay.svg" alt @click="randomPlay" class="random-play" />
      <img src="../assets/img/footer/back.svg" alt @click="backPlay" />
      <img src="../assets/img/footer/play.svg" alt @click="controlPlay" v-show="!playActive" />
      <img src="../assets/img/footer/pause.svg" alt @click="controlPlay" v-show="playActive" />
      <img src="../assets/img/footer/next.svg" alt @click="nextPlay" />
      <img src="../assets/img/footer/circulate.svg" alt @click="circulate" class="circulate" />
      <img
        src="../assets/img/footer/listCirculate.svg"
        alt
        @click="listCirculate"
        class="list-circulate"
      />
      <!-- 进度条 -->
      <div class="icon-item">
        <div class="leftTime">{{currentTime}}</div>

        <div class="slider-demo-block">
          <el-slider
            v-model="value1"
            size="small"
            :show-tooltip="false"
            @change="change"
            @click="changgg"
          />
        </div>
        <div class="rigthTime">{{endTime}}</div>
      </div>
    </div>
    <!-- 声音 -->
    <div class="volume">
      <img src="@/assets/img/footer/volume.svg" alt />
      <div class="volume-progress" @click="changVolume" ref="volumeProgress">
        <div class="volume-bar" ref="volumeBar"></div>
      </div>
      <el-badge :value="state.playList.length" class="item" type="primary">
        <img src="../assets/img/footer/playlist.svg" alt @click="toTotalList" class="total-list" />
      </el-badge>
    </div>
  </div>
</template>

<script>
export default { name: 'Footer' }
</script>
<script setup>
import { ref, reactive, watch, computed, nextTick, onMounted } from 'vue'
import { useState } from '@/hooks/useVuex'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
const { songUrl } = useState('footer', ['songUrl'])
const { songDetail } = useState('footer', ['songDetail'])
let playActive = ref('') //控制播放暂停按钮的显示
let platState = ref(-1) //-1表示列表循环 0表示随机播放 1表示单曲循环
let value1 = ref(0)
const audio = ref() // 这里是拿到audio的dom元素
const volumeProgress = ref()
const volumeBar = ref()
const currentTime = ref('00:00')
const endTime = ref('')
const state = reactive({
  playList: [
    {
      url: require('../assets/img/footer/lx.mp3'),

    },
		 {
      url: require('../assets/img/footer/yhbk.mp3'),

    },
		 {
      url: require('../assets/img/footer/csm.mp3'),
    },
  ],
  infoList: [
    {
      name: '留香',
      id: 1913262091,
      dt: 247901,
      al: {
        picUrl:
          'http://p3.music.126.net/MGi2DhJTg3fowTNIrkT72A==/109951166953976034.jpg',
        name: '留香',
        id: 139094989,
      },
      ar: [{ id: 5771, name: '许嵩' }],
    },
    {
      name: '有何不可',
      id: 167876,
      dt: 241840,
      al: {
        picUrl:
          'https://p1.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg',
        name: '自定义',
        id: 16953,
      },
      ar: [{ id: 5771, name: '许嵩' }],
    },

    {
      name: '尘世美',
      id: 167755,
      dt: 260000,
      al: {
        picUrl:
          'http://p4.music.126.net/VUtLfAqLDYMn2dfy0qlRkw==/109951166118678136.jpg',
        name: '半城烟沙',
        id: 16942,
      },
      ar: [{ id: 5771, name: '许嵩' }],
    },
  ],
  currentIndex: 0,
})
//格式化时间
function transTime(time) {
  let duration = parseInt(time)
  let minute = parseInt(duration / 60)
  let sec = (duration % 60) + ''
  let isM0 = ':'
  if (minute == 0) {
    minute = '00'
  } else if (minute < 10) {
    minute = '0' + minute
  }
  if (sec.length == 1) {
    sec = '0' + sec
  }
  return minute + isM0 + sec
}
const getDuration = () => {
  endTime.value = transTime(audio.value.duration)
}
// 开始播放音频
const audioPlay = () => {
  audio.value.play()
}
const controlPlay = () => {
  if (!audio.value.paused) {
    audio.value.pause() // 停止播放
    playActive.value = false
  } else {
    audio.value.play() // 开始播放
    playActive.value = true
  }
}
//下一首
const nextPlay = () => {
  if (platState.value === -1) {
    state.currentIndex =
      state.currentIndex === 0
        ? state.playList.length - 1
        : state.currentIndex - 1
    // 这里要延迟播放，因为要先让它加载一下
    playActive.value = true
    nextTick(() => {
      audioPlay()
    })
  } else if (platState.value === 0) {
    state.currentIndex = Math.floor(Math.random() * state.playList.length)
    playActive.value = true
    nextTick(() => {
      audioPlay()
    })
  } else if (platState.value === 1) {
    playActive.value = true
    nextTick(() => {
      audioPlay()
    })
  }
}
//上一首
const backPlay = () => {
  state.currentIndex =
    state.currentIndex === state.playList.length - 1
      ? 0
      : state.currentIndex + 1
}
const timeupdate = e => {
  value1.value = (e.target.currentTime / audio.value.duration) * 100
  currentTime.value = transTime(e.target.currentTime)
  //进度条结束播放下一首
  if (e.target.currentTime === audio.value.duration) {
    playActive.value = true
    nextTick(() => {
      nextPlay()
    })
  }
}
//拖拽进度条改变时间
const change = value => {
  audio.value.currentTime = audio.value.duration * (value / 100)
  currentTime.value = transTime(audio.value.currentTime)
}
//点击进度条改变时间
const changgg = () => {
  audio.value.currentTime = audio.value.duration * (value1.value / 100)
  currentTime.value = transTime(audio.value.currentTime)
}
//点击
const changVolume = e => {
  audio.value.volume = e.offsetX / volumeProgress.value.offsetWidth
  volumeBar.value.style.width =
    (e.offsetX / volumeProgress.value.offsetWidth) * 100 + '%'
}
//随机播放
const randomPlay = () => {
  ElMessage.success('随机播放')
  platState.value = 0
}
//单曲循环
const circulate = () => {
  ElMessage.success('单曲循环')
  platState.value = 1
}
//列表循环
const listCirculate = () => {
  ElMessage.success('列表循环')
  platState.value = -1
}
//顺序播放
const orderPlay = () => {
  ElMessage.success('顺序播放')
  platState.value = -1
}
// 前往歌曲播放列表
const toTotalList = () => {
  store.commit('footer/GETTOTALLIST', totalList)
  router.push({
    path: '/totalList',
  })
}

const currentPlayUrl = computed(() => {
  return state.playList[state.currentIndex]
})
const currentInfoList = computed(() => {
  return state.infoList[state.currentIndex]
})

//合并infoList与playList
const totalList = computed(() => {
  var arr = []
  state.playList.forEach((item, index) => {
    arr[index] = { ...item, ...state.infoList[index] }
  })
  return arr
})
watch(songUrl, newValue => {
  state.playList.unshift({ url: newValue.url })
  playActive.value = true
  nextTick(() => {
    audioPlay()
  })
})
watch(songDetail, newValue => {
  state.infoList.unshift({
    name: newValue.name,
    al: newValue.al,
    ar: newValue.ar,
    dt: newValue.dt,
    id: newValue.id,
  })
})
</script>
<style scoped lang='less'>
.footer {
  display: flex;
  margin-top: 5px;
  .left {
    width: 300px;
    display: flex;
    .name {
      margin-top: -8px;
      margin-left: 10px;
    }
  }

  .pic {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    vertical-align: middle;
    margin-top: 5px;
  }
  .icon {
    margin-top: 4px;
    margin-left: 160px;
    cursor: pointer;
    img {
      margin-left: 6px;
    }
    .order-play {
      margin-right: 12px;
      margin-bottom: 5px;
    }
    .random-play {
      margin-right: 5px;
      margin-bottom: 2px;
    }
    .circulate {
      margin-bottom: 2px;
      margin-left: 8px;
    }
    .list-circulate {
      margin-bottom: 2px;
      margin-left: 18px;
    }
  }
  .icon-item {
    display: flex;
    margin-top: 10px;
    margin-left: -160px;
    text-align: center;
    .leftTime,
    .rigthTime {
      margin-top: -6px;
    }
    .leftTime {
      margin-right: 20px;
    }
    .rigthTime {
      margin-left: 20px;
    }
  }
  .volume {
    display: flex;
    margin-left: 160px;
    margin-top: 30px;
    .volume-progress {
      width: 100px;
      height: 7px;
      border-radius: 10px;
      background-color: rgb(225, 225, 225);
      margin-top: 8px;
      margin-left: 5px;
    }
    .volume-bar {
      width: 100px;
      height: 7px;
      border-radius: 10px;
      background-color: #409eff;
    }
    img {
      width: 25px;
      height: 25px;
    }
    .total-list {
      margin-left: 20px;
    }
  }
  .slider-demo-block {
    margin-top: -10px;
    width: 500px;
  }
}
</style>