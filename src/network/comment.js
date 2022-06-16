
import { request } from './request'
// 获得搜素信息
export function getComment(id,type) {
	return request({
			url: '/comment/new',
			params:{
				id,
				type,
				sortType:2
			}
	})
}
