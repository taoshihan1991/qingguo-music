//音乐首页
app.controller("musicIndex",function($scope,$http){
	var musicData=JSON.parse(localStorage.getItem("music"));
	if(musicData){
		$scope.musicList=musicData;
		$scope.play=function(index){
			resetMusicPlay(musicData,index);
		}
		return;
	}

	$http.get("apis/playlist.php")
    .success(function(musicData) {
		$scope.musicList=musicData;
		localStorage.setItem("music",JSON.stringify(musicData));
		$scope.play=function(index){
			resetMusicPlay(musicData,index);
		}
    });

});

//意境古风
app.controller("china",function($scope,$http){
	var musicData=JSON.parse(localStorage.getItem("music-china"));
	if(musicData){
		$scope.musicList=musicData;
		$scope.play=function(index){
			resetMusicPlay(musicData,index);
		}
		return;
	}

	$http.get("apis/playlist.php?action=china")
    .success(function(musicData) {
		$scope.musicList=musicData;
		localStorage.setItem("music-china",JSON.stringify(musicData));
		$scope.play=function(index){
			resetMusicPlay(musicData,index);
		}
    });	
});

//影音江湖
app.controller("movie",function($scope,$http){
	var musicData=JSON.parse(localStorage.getItem("music-movie"));
	if(musicData){
		$scope.musicList=musicData;
		$scope.play=function(index){
			resetMusicPlay(musicData,index);
		}
		return;
	}

	$http.get("apis/playlist.php?action=movie")
    .success(function(musicData) {
		$scope.musicList=musicData;
		localStorage.setItem("music-movie",JSON.stringify(musicData));
		$scope.play=function(index){
			resetMusicPlay(musicData,index);
		}
    });		
});

//励志青春
app.controller("young",function($scope,$http){
	var musicData=JSON.parse(localStorage.getItem("music-young"));
	if(musicData){
		$scope.musicList=musicData;
		$scope.play=function(index){
			resetMusicPlay(musicData,index);
		}
		return;
	}

	$http.get("apis/playlist.php?action=young")
    .success(function(musicData) {
		$scope.musicList=musicData;
		localStorage.setItem("music-young",JSON.stringify(musicData));
		$scope.play=function(index){
			resetMusicPlay(musicData,index);
		}
    });		
});
