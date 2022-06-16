import { request } from './request'
// 获得专辑信息
export function getAlbumDetail(id) {
	return request({
			url: '/album',
		params:{
			id
		}
	})
}
