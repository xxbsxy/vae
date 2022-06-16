import {getSongUrl} from '../network/footer';
import {getAllSong} from '../network/songListDetail';


export default {
	namespaced:true,
	actions: {
		// 获得歌曲url
		getSongUrl(context,value){
			getSongUrl(value).then(res=>{
			context.commit('GETSONGURL',res.data[0])
		})
	},
	// 传入id获取歌曲详情
	getSongDetail(context,value){
		getAllSong(value).then(res=>{
	
			context.commit('GETSONGDETAIL',res.songs[0])
		})
	}
	},
	mutations: {
		// 获得歌曲url
		GETSONGURL(state,value){
			state.songUrl=value
		},
	// 传入id获取歌曲详情
		GETSONGDETAIL(state,value){
			state.songDetail=value
		},
		// 获得播放队列
		GETTOTALLIST(state,value){
				state.totalList=value.value
		}

	},
	getters: {

	},

	state: {
		songUrl:{},
		songDetail:{},
		totalList:[]
	}
}