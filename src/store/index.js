import { createStore } from 'vuex'
import search from './search'
import music from './music'
import header from './header'
import songListDetail from './songListDetail'
import radio from './radio'
import video from './video'
import songList from './songList'
import footer from './footer'
import singerDetail from './singerDetail'
import albumDetail from './albumDetail'
import mvDetail from './mvDetail'
import recommend from './recommend'



export default createStore({
  modules: {
		search,
		music,
		header,
		songListDetail,
		radio,
		video,
		songList,
		footer,
		singerDetail,
		albumDetail,
		mvDetail,
		recommend
  }
})
