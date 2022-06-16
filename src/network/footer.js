import { request } from './request'
// 获得歌曲url信息
export function getSongUrl(id) {
	return request({
			url: '/song/url',
			params:{
				id
			}
	})
}