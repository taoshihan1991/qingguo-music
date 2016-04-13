var app=angular.module("Home",["ui.router"]);
window.location.href="#/index";
var ap1 = new APlayer({
    element: document.getElementById('player1'),
    narrow: false,
    autoplay: true,
    showlrc: false,
    mutex: true,
    theme: '#C70C0C',
    music: {
        title: '在他乡',
        author: '水木年华',
        url: 'http://sc.111ttt.com/up/mp3/110892/2466AEB3911F8D8308C45EB29E3F9B95.mp3',
        pic: 'http://img1.kuwo.cn/star/starheads/240/79/78/2507339289.jpg'
    }
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