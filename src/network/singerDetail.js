import { request } from './request'
// 获得用户信息
export function getSingerDetail(id) {
	return request({
			url: '/artists',
		params:{
			id
		}
	})
}
