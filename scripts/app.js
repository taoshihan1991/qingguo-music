var app=angular.module("Home",["ui.router"]);

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
    $stateProvider.state("search",{
        url:"/search/{songId}",
        templateUrl:'views/musicIndex.html',
        controller:'search'
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
function download(musicData,index){
    console.log(musicData);
    var html="<form id='down' action='apis/download.php' method='post'>";
    html+="<input type='hidden' name='url' value='"+musicData[index]['url']+"'/>";
    html+="<input type='hidden' name='title' value='"+musicData[index]['title']+"'/>";
    html+="</form>";
    var form=$(html);
    form.appendTo(document.body)
    form.submit();
}