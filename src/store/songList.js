import {getSongList} from '../network/songList';

export default {
	namespaced:true,
	actions: {
		//获得歌单
		getSongList(context,value){
			getSongList().then(res=>{
			context.commit('GETSONGLIST',res.playlists)
		})
	}
	},
	mutations: {
		//获得歌单
		GETSONGLIST(state,value){
			state.songLists=value
		}

	},
	getters: {

	},

	state: {
		songLists:[]
	}
}