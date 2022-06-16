import { getRadio,getRadioBanner,getRadioDetail,getRadioProgram } from '../network/radio';

export default {
	namespaced: true,
	actions: {
		// 获得全部电台
		getRadio(context, value) {
			getRadio().then(res => {
				context.commit('GETRADIO', res.djRadios)
			})
		},
		//获得电台轮播图
		getRadioBanner(context, value) {
			getRadioBanner().then(res => {
				context.commit('GETRADIOBANNER', res.data)
			})
		},
		// 获得电台详情
		getRadioDetail(context, value) {
			getRadioDetail(value).then(res => {
				context.commit('GETRADIODETAIL', res.data)
			})
		},
		// 获得电台节目
		getRadioProgram(context, value) {
			getRadioProgram(value).then(res => {
				console.log(res);
				context.commit('GETRADIOPROGEAM', res.programs)
			})
		},
		
	},
	mutations: {
		// 获得全部电台
		GETRADIO(state, value) {
			state.radios = value
		},
		//获得电台轮播图
		GETRADIOBANNER(state, value) {
			state.radioBanner = value
		},
		// 获得电台详情
		GETRADIODETAIL(state, value) {
			state.radioDetail = value
		},
		// 获得电台节目
		GETRADIOPROGEAM(state, value) {
			state.radioPrograms = value
		}

	},
	getters: {

	},

	state: {
		radios: [],
		radioBanner: [],
		radioPrograms:[],
		radioDetail:{}
	}
}