import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path:'/',
		redirect:'/music'
	},
	{
		path:'/search',
		redirect:'/search/hotSong'
	},
	{
		path:'/music',
		redirect:'/music/newSong'
	},
	{
		path:'/songListDetail',
		redirect:'/songListDetail/songs'
	},
	
	{
		path:'/albumDetail',
		redirect:'/albumDetail/songs'
	},
	{
		path:'/music',
		component: () => import('../views/Music/Music.vue'),
		children:[
			{
				path:'newSong',
	    	component: () => import('../views/Music/main/NewSong.vue'),
			},
			{
				path:'songList',
	    	component: () => import('../views/Music/main/SongList.vue'),
			},
			{
				path:'mv',
	    	component: () => import('../views/Music/main/Mv.vue'),
			},
		]
	},
	{
		path:'/radio',
		component: () => import('../views/Radio/Radio.vue')
	},
	{
		path:'/video',
		component: () => import('../views/Video/Video.vue')
	},
	{
		path:'/singer',
		component: () => import('../views/singer/Singer.vue')
	},
	{
		path:'/singerDetail',
		component: () => import('../views/singerDetail/SingerDetail.vue')
	},
	{
		path:'/totalList',
		component: () => import('../views/totalList/TotalList.vue')
	},
	{
		path:'/mvDetail',
		component: () => import('../views/mvDetail/MvDetail.vue')
	},
	{
		path:'/recommend',
		component: () => import('../views/recommend/Recommend.vue')
	},
	{
		path:'/albumDetail',
		component: () => import('../views/albumDetail/AlbumDteail.vue'),
		children:[
			{
				path:'songs',
		component: () => import('../views/albumDetail/Songs.vue'),
			},
			{
				path:'comment',
		    component: () => import('../views/albumDetail/Comment.vue'),
			}
		]
	},
	{
		path:'/rank',
		component: () => import('../views/rank/Rank.vue')
	},
	{
		path:'/songList',
		component: () => import('../views/songList/SongList.vue')
	},{
		path:'/radioDetail',
		component: () => import('../views/radioDetail/RadioDetail.vue')
	},
	{
		path:'/search',
		component: () => import('../views/Search/Search.vue'),
		children:[
			{
				path:'hotSong',
	    	component: () => import('../views/Search/HotSong.vue'),
			},
			{
				path:'songList',
	    	component: () => import('../views/Search/SongList.vue'),
			},
			{
				path:'mv',
	    	component: () => import('../views/Search/Mv.vue'),
			},
			{
				path:'album',
	    	component: () => import('../views/Search/Album.vue'),
			},
		]
	},
	{
		path:'/newMv',
		component: () => import('../views/newMv/NewMv.vue')
	},
	{
		path:'/songListDetail',
		component: () => import('../views/songListDetail/SongListDetail.vue'),
		children:[
			{
				path:'songs',
		component: () => import('../views/songListDetail/Songs.vue'),
			},
			{
				path:'comment',
		    component: () => import('../views/songListDetail/Comment.vue'),
			}
		]
	},
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
