import { request } from './request'
// 获得用户信息
export function getSongList() {
	return request({
			url: '/top/playlist',
	})
}