import {getUserMessages,getUserSongList} from '../network/header';

export default {
	namespaced:true,
	actions: {
		// 获得用户详情
	getUser(context,value){
		getUserMessages(value.phone,value.password).then(res=>{
			context.commit('GETUSER',res.profile)
		})
	},
	// 获得用户创建的歌单
	getUserSongList(context,value){
		getUserSongList(value).then(res=>{
			context.commit('GETUSERSONGLIST',res.playlist)
		})
	}
	},
	mutations: {
		// 获得用户详情
		GETUSER(state,value){
			state.user=value
		},
	// 获得用户创建的歌单
		GETUSERSONGLIST(state,value){
			state.userSongList=value
		}

	},
	getters: {

	},

	state: {
		user:{},
		userSongList:null
	}
}