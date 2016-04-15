//音乐首页
app.controller("musicIndex",function($scope,$http){
	$http.get("apis/playlist.php")
    .success(function(musicData) {
		$scope.musicList=musicData;
		$scope.play=function(index){
			var ap1 = new APlayer({
			    element: document.getElementById('player1'),
			    narrow: false,
			    autoplay: true,
			    showlrc: false,
			    mutex: true,
			    theme: '#C70C0C',
			    music:musicData[index]
			});
			ap1.init();
		}
    });

});

//推荐
app.controller("recommend",function($scope){
	
});

//排行榜
app.controller("topList",function($scope){
	
});

//歌单
app.controller("playList",function($scope){
	
});