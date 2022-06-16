import { request } from './request'
// 获得每日推荐歌曲信息
export function getRecommendSong() {
	return request({
			url: '/recommend/songs',
		
	})
}
export function getRecommendSongList() {
	return request({
			url: '/recommend/resource',
	})
}