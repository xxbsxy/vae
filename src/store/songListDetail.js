import { getSongListDetail, getAllSong } from '../network/songListDetail';
import { getComment } from '../network/comment'

export default {
	namespaced: true,
	actions: {
		// 获得歌单详情
		getSongListDetail(context, value) {
			getSongListDetail(value).then(res => {
				context.commit('GETSONGLISTDETAIL', res.playlist)
			})
		},
		// 获得歌单全部歌曲
		getAllSong(context, value) {
			var ids = []
			value.forEach((item, index) => {
				ids[index] = item.id
			});
			ids = ids.join(',');
			getAllSong(ids).then(res => {
				context.commit('GETALLSONG', res.songs)
			})
		},
		// 获得歌单评论
		getComment(context, value) {
			getComment(value.id, value.type).then(res => {
				context.commit('GETCOMMENT', res.data.comments)
			})
		}
	},
	mutations: {
		// 获得歌单详情
		GETSONGLISTDETAIL(state, value) {
			state.songList = value
		},
		// 获得歌单全部歌曲
		GETALLSONG(state, value) {
			state.songs = value
		},
		// 获得歌单评论
		GETCOMMENT(state, value) {
			state.comments = value

		}

	},
	getters: {

	},

	state: {
		songList: {},
		songs: [],
		comments: []
	}
}