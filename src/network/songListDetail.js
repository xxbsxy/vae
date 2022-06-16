import { request } from './request'
// 获得歌单详情
export function getSongListDetail(id) {
    return request({
        url: '/playlist/detail',
				params:{
					id
				}
    })
}
// 获得歌曲详情
export function getAllSong(ids) {
	return request({
			url: '/song/detail',
			params:{
				ids
			}
	})
}
//获取音乐url
export function getSongUrl(id) {
	return request({
			url: '/song/url',
			params:{
				id
			}
	})
}