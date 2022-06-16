import {getBanner,getNewSong,getMv,getSongList,getNewMv,getTopList,getSingers} from '../network/music';

export default {
	namespaced:true,
	actions: {
	getBanners(context,value){
		//发送请求获得轮播图数据
		getBanner().then(res=>{
			context.commit('GETBANNERS',res.banners)
		})
	},
	getNewSongs(context,value){
		//发送请求获得最新音乐数据
		getNewSong().then(res=>{
			context.commit('GETNEWSONGS',res.result)
		})
	},
	getMvs(context,value){
		//发送请求获得mv数据
		getMv().then(res=>{
			context.commit('GETMVS',res.data)
		})
	},
	getSongLists(context,value){
		//发送请求获得歌单数据
		getSongList().then(res=>{
			context.commit('GETSONGLISTS',res.result)
		})
	},
	getNewMvs(context,value){
		//发送请求获得最新MV数据
		getNewMv().then(res=>{
			context.commit('GETNEWMVS',res.data)
		})
	},
	// 获得排行榜数据
	getTopList(context,value){
		getTopList().then(res=>{
			context.commit('GETTOPLIST',res.list)
		})
	},
	// 获得全部歌手数据
	getSingers(context,value){
		getSingers(value).then(res=>{
			console.log(res);
			context.commit('GETSINGERS',res.artists)

		})
	}
	},
	mutations: {
		//将轮播图数据存入state
		GETBANNERS(state,value){
			state.banners=value
		},
		//将轮播图数据存入state

		GETNEWSONGS(state,value){
		//将最新音乐数据存入state
			state.newSongs=value
		},
		//将mv数据存入state
		GETMVS(state,value){
			state.mvs=value
		},
		//将歌单数据存入state
		GETSONGLISTS(state,value){
			state.songLists=value
		},
		//将最新MV数据存入state
		GETNEWMVS(state,value){
			state.newMvs=value
		},
	// 歌手排行榜存入state
		GETTOPLIST(state,value){
			state.ranks=value
		},
	// 歌手数据数据存入state
		GETSINGERS(state,value){
			state.singers=value

		}

	},
	getters: {

	},

	state: {
		banners:[],
		newSongs:[],
		mvs:[],
		songLists:[],
		newMvs:[],
		ranks:[],
		singers:[]
	}
}