var app=angular.module("Home",["ui.router"]);
window.location.href="#/index";
// var musicJson=[
//         {
//             title: '一直很安静,电视剧《仙剑奇侠传》插曲',
//             author: '《仙剑奇侠传》电视剧',
//             url: 'http://link.hhtjim.com/163/5260494.mp3',
//             pic: 'images/2.jpg'
//         },
//         {
//             title: '终于明白,电视剧《仙剑奇侠传》插曲',
//             author: '《仙剑奇侠传》电视剧',
//             url: 'http://link.hhtjim.com/163/5260505.mp3',
//             pic: 'images/3.jpg'
//         },
//         {
//             title: '六月的雨',
//             author: '《仙剑奇侠传》电视剧',
//             url: 'http://link.hhtjim.com/163/200760.mp3',
//             pic: 'images/4.jpg'
//         },
//         {
//             title: '一直很安静,电视剧《仙剑奇侠传》插曲',
//             author: '《仙剑奇侠传》电视剧',
//             url: 'http://link.hhtjim.com/163/5260494.mp3',
//             pic: 'images/2.jpg'
//         },
//         {
//             title: '终于明白,电视剧《仙剑奇侠传》插曲',
//             author: '《仙剑奇侠传》电视剧',
//             url: 'http://link.hhtjim.com/163/5260505.mp3',
//             pic: 'images/3.jpg'
//         },
//         {
//             title: '六月的雨',
//             author: '《仙剑奇侠传》电视剧',
//             url: 'http://link.hhtjim.com/163/200760.mp3',
//             pic: 'images/4.jpg'
//         },
//         {
//             title: '一直很安静,电视剧《仙剑奇侠传》插曲',
//             author: '《仙剑奇侠传》电视剧',
//             url: 'http://link.hhtjim.com/163/5260494.mp3',
//             pic: 'images/2.jpg'
//         },
//         {
//             title: '终于明白,电视剧《仙剑奇侠传》插曲',
//             author: '《仙剑奇侠传》电视剧',
//             url: 'http://link.hhtjim.com/163/5260505.mp3',
//             pic: 'images/3.jpg'
//         },
//         {
//             title: '六月的雨',
//             author: '《仙剑奇侠传》电视剧',
//             url: 'http://link.hhtjim.com/163/200760.mp3',
//             pic: 'images/4.jpg'
//         },
//         {
//             title: '一直很安静,电视剧《仙剑奇侠传》插曲',
//             author: '《仙剑奇侠传》电视剧',
//             url: 'http://link.hhtjim.com/163/5260494.mp3',
//             pic: 'images/2.jpg'
//         },

//     ];

getMusicData(function(musicData){
    showMusic(musicData);
});
$('.qHeader a').click(function(){
    var index=$(this).index();
    $(".qHeader a").removeClass("current").eq(index).addClass("current");
});    
app.config(function($stateProvider,$urlRouterProvider){
	//音乐首页
    $stateProvider.state("index",{
        url:"/index",
        templateUrl:'views/musicIndex.html',
        controller:'musicIndex'
    });
	//
    $stateProvider.state("china",{
        url:"/china",
        templateUrl:'views/musicIndex.html',
        controller:'china'
    });
    $stateProvider.state("movie",{
        url:"/movie",
        templateUrl:'views/musicIndex.html',
        controller:'movie'
    });
    $stateProvider.state("young",{
        url:"/young",
        templateUrl:'views/musicIndex.html',
        controller:'young'
    });
});

//函数库
//获取数据
function getMusicData(func){
    var musicData=JSON.parse(localStorage.getItem("music"));
    if(musicData){
        var musicData=JSON.parse(localStorage.getItem("music"));
        func(musicData);
    }else{
        $.ajax({
             type: "GET",
             url: "apis/playlist.php",
             dataType: "json",
             success:function(musicData){
                localStorage.setItem("music",JSON.stringify(musicData));
                func(musicData);   
             },
             error:function(){
                console.log("服务端无响应");
             }
        });    
    }
}
// 播放音乐
function showMusic(musicData){
     var ap1 = new APlayer({
        element: document.getElementById('player1'),
        narrow: false,
        autoplay: true,
        showlrc: false,
        mutex: true,
        theme: '#C70C0C',
        music:musicData
    });
    ap1.init();    
}
//重组数据播放
function resetMusicPlay(musicData,index){
    if(index==0){
        showMusic(musicData);
        return;
    }
    var currentIndex=index;
    var newMusicList=new Array();
    for(var i=0;i<musicData.length;i++){
        if(currentIndex<=i){
            newMusicList.push(musicData[i]);
        }
    }
    for(var i=0;i<musicData.length;i++){
        if(currentIndex>i){
            newMusicList.push(musicData[i]);
        }
    }
    showMusic(newMusicList);
}