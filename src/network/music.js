import { request } from './request'
// 获得轮播图信息
export function getBanner() {
	return request({
			url: '/banner',
	})
}
//获得新音乐
export function getNewSong() {
	return request({
			url: '/personalized/newsong',
	})
}
//获得Mv
export function getMv() {
	return request({
			url: '/mv/exclusive/rcmd',
	})
}
//获得推荐歌单
export function getSongList() {
	return request({
			url: '/personalized',
	})
}
//获得最新Mv
export function getNewMv() {
	return request({
			url: '/mv/first',
	})
}
//排行榜
export function getTopList() {
	return request({
			url: '/toplist',
	})
}

export function getSingers(area=-1) {
	return request({
			url: '/artist/list',
			params:{
				area
			}
	})
}