import {getAlbumDetail} from '../network/albumDetail';

export default {
	namespaced:true,
	actions: {
		// 获得专辑详情
		getAlbumDetail(context,value){
			getAlbumDetail(value).then(res=>{
			context.commit('GETALBUMDETAIL',res)
		})
	}
	},
	mutations: {
		// 获得专辑详情
		GETALBUMDETAIL(state,value){
			state.albumSongs=value.songs
			state.album=value.album

		}
	},
	getters: {
	},

	state: {
		albumSongs:[],
		album:{}
	}
}