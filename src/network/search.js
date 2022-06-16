import { request } from './request'
// 获得搜素信息
export function search(keywords,type) {
	return request({
			url: '/cloudsearch',
			params:{
				keywords,
				limit:100,
				type
			}
	})
}
