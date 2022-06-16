import {search} from '../network/search';

export default {
	namespaced:true,
	actions: {
		// 获得搜素结果
	getSearch(context,value){
		search(value.keywords,value.type).then(res=>{
			context.commit('GETSEARCH',res.result)
		})
	}
	},
	mutations: {
		// 获得搜素结果
		GETSEARCH(state,value){
			state.result=value
		}

	},
	getters: {

	},

	state: {
		result:{}
	}
}