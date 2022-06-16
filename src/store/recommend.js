import {getRecommendSong,getRecommendSongList} from '../network/recommend';

export default {
	namespaced:true,
	actions: {
		// 获得推荐歌曲
		getRecommendSong(context,value){
			getRecommendSong(value).then(res=>{
			context.commit('GETRECOMMENDSONG',res.data.dailySongs)
		})
	},
	// 获得推荐歌单
	getRecommendSongList(context,value){
		getRecommendSongList().then(res=>{
		context.commit('GETRECOMMENDSONGLIST',res.recommend)
	})
}
	},
	mutations: {
		// 获得推荐歌曲
		GETRECOMMENDSONG(state,value){
			state.recommendSongs=value
		},
	// 获得推荐歌单
		GETRECOMMENDSONGLIST(state,value){
			state.recommendSongList=value
		}
		
	},
	getters: {
	},

	state: {
		recommendSongs:[],
		recommendSongList:[]
	}
}