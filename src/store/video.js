import { getVideo } from '../network/video';

export default {
	namespaced: true,
	actions: {
		// 获得视频
		getVideo(context, value) {
			getVideo().then(res => {
				context.commit('GETVIDEO', res.data)
			})
		}
	},
	mutations: {
		// 获得视频
		GETVIDEO(state, value) {
			state.videos = value
		}

	},
	getters: {

	},

	state: {
		videos: []
	}
}