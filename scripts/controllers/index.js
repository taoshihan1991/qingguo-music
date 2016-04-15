//音乐首页
app.controller("musicIndex",function($scope,$http){
	var musicData=JSON.parse(localStorage.getItem("music"));
	if(musicData){
		$scope.musicList=musicData;
		$scope.play=function(index){
			localStorage.setItem("music",JSON.stringify(musicData));
			showMusic(musicData[index]);
		}
		return;
	}

	$http.get("apis/playlist.php")
    .success(function(musicData) {
		$scope.musicList=musicData;
		localStorage.setItem("music",JSON.stringify(musicData));
		$scope.play=function(index){
			showMusic(musicData[index]);
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
