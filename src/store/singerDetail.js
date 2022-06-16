
import { getSingerDetail } from '../network/singerDetail';

export default {
	namespaced: true,
	actions: {
		// 获得歌手详情
		getSingerDetail(context, value) {
			getSingerDetail(value).then(res => {
				console.log(res);
				context.commit('GETSINGERDETAIL', res)
			})
		}
	},
	mutations: {
		// 获得歌手详情
		GETSINGERDETAIL(state, value) {
			state.artist = value.artist
			state.hotSongs = value.hotSongs
		}
	},
	getters: {

	},

	state: {
		artist: {},
		hotSongs: []
	}
}