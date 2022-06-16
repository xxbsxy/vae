
import { request } from './request'
// 获得电台信息
export function getRadio() {
	return request({
			url: '/dj/hot',
	})
}

export function getRadioBanner() {
	return request({
			url: '/dj/banner',
	})
}

export function getRadioDetail(rid) {
	return request({
			url: '/dj/detail',
			params:{
				rid
			}
	})
}

export function getRadioProgram(rid) {
	return request({
			url: '/dj/program',
			params:{
				rid
			}
	})
}