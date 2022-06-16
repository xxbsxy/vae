import { request } from './request'
// 获得用户信息
export function getVideo() {
	return request({
			url: '/mv/all',
	})
}
