import { request } from './request'
// 获得mv url
export function getMvUrl(id) {
	return request({
			url: '/mv/url',
			params:{
				id
			}
	})
}
export function getMvDetail(mvid) {
	return request({
			url: '/mv/detail',
			params:{
				mvid
			}
	})
}