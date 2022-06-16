import { request } from './request'
// 获得用户信息
export function getUserMessages(phone, password) {
	return request({
			url: '/login/cellphone',
			method: 'post',
			data: {
					phone,
					password
			}
	})
}

export function getUserSongList(uid) {
	return request({
			url: '/user/playlist',
		params:{
			uid
		}
	})
}
