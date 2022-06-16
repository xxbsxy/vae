import { getMvUrl, getMvDetail } from '../network/mvDetail';

export default {
	namespaced: true,
	actions: {
		// 获得mv播放url
		getMvUrl(context, value) {
			getMvUrl(value).then(res => {
				context.commit('GETMVURL', res.data)
			})
		},
		// 获得mv详情
		getMvDetail(context, value) {
			getMvDetail(value).then(res => {
				console.log(res);
				context.commit('GETMVDETAIL', res.data)
			})
		}
	},
	// 获得mv播放url
	mutations: {
		GETMVURL(state, value) {
			state.mvUrl = value
		},
		// 获得mv详情
		GETMVDETAIL(state, value) {
			state.mvDetail = value
		}

	},
	getters: {

	},

	state: {
		mvUrl: {},
		mvDetail: {}
	}
}