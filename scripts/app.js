var app=angular.module("Home",["ui.router"]);
window.location.href="#/index";

var musicJson=[
        {
            title: '一直很安静,电视剧《仙剑奇侠传》插曲',
            author: '《仙剑奇侠传》电视剧',
            url: 'http://link.hhtjim.com/163/5260494.mp3',
            pic: 'images/2.jpg'
        },
        {
            title: '终于明白,电视剧《仙剑奇侠传》插曲',
            author: '《仙剑奇侠传》电视剧',
            url: 'http://link.hhtjim.com/163/5260505.mp3',
            pic: 'images/3.jpg'
        },
        {
            title: '六月的雨',
            author: '《仙剑奇侠传》电视剧',
            url: 'http://link.hhtjim.com/163/200760.mp3',
            pic: 'images/4.jpg'
        },
        {
            title: '一直很安静,电视剧《仙剑奇侠传》插曲',
            author: '《仙剑奇侠传》电视剧',
            url: 'http://link.hhtjim.com/163/5260494.mp3',
            pic: 'images/2.jpg'
        },
        {
            title: '终于明白,电视剧《仙剑奇侠传》插曲',
            author: '《仙剑奇侠传》电视剧',
            url: 'http://link.hhtjim.com/163/5260505.mp3',
            pic: 'images/3.jpg'
        },
        {
            title: '六月的雨',
            author: '《仙剑奇侠传》电视剧',
            url: 'http://link.hhtjim.com/163/200760.mp3',
            pic: 'images/4.jpg'
        },
        {
            title: '一直很安静,电视剧《仙剑奇侠传》插曲',
            author: '《仙剑奇侠传》电视剧',
            url: 'http://link.hhtjim.com/163/5260494.mp3',
            pic: 'images/2.jpg'
        },
        {
            title: '终于明白,电视剧《仙剑奇侠传》插曲',
            author: '《仙剑奇侠传》电视剧',
            url: 'http://link.hhtjim.com/163/5260505.mp3',
            pic: 'images/3.jpg'
        },
        {
            title: '六月的雨',
            author: '《仙剑奇侠传》电视剧',
            url: 'http://link.hhtjim.com/163/200760.mp3',
            pic: 'images/4.jpg'
        },
        {
            title: '一直很安静,电视剧《仙剑奇侠传》插曲',
            author: '《仙剑奇侠传》电视剧',
            url: 'http://link.hhtjim.com/163/5260494.mp3',
            pic: 'images/2.jpg'
        },

    ];

var ap1 = new APlayer({
    element: document.getElementById('player1'),
    narrow: false,
    autoplay: true,
    showlrc: false,
    mutex: true,
    theme: '#C70C0C',
    music:musicJson
});
ap1.init();
    
app.config(function($stateProvider,$urlRouterProvider){


	//音乐首页
    $stateProvider.state("index",{
        url:"/index",
        templateUrl:'views/musicIndex.html',
        controller:'musicIndex'
    });
	//
    $stateProvider.state("recommend",{
        url:"/recommend",
        templateUrl:'views/recommend.html',
        controller:'recommend'
    });
    $stateProvider.state("topList",{
        url:"/topList",
        templateUrl:'views/topList.html',
        controller:'topList'
    });
    $stateProvider.state("playList",{
        url:"/playList",
        templateUrl:'views/playList.html',
        controller:'playList'
    });
});