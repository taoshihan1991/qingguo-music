//音乐首页
app.controller("musicIndex",function($scope,$http){
	musicControl($scope,$http,422120471);
});

//意境古风
app.controller("china",function($scope,$http){
	musicControl($scope,$http,433825200);
});

//影音江湖
app.controller("movie",function($scope,$http){
	musicControl($scope,$http,424038303);
});

//励志青春
app.controller("young",function($scope,$http){
	musicControl($scope,$http,37917950);
});

//搜索歌单
app.controller("search",function($scope,$http,$stateParams){
	var songId=$stateParams.songId;
	var musicData=JSON.parse(localStorage.getItem("music-"+songId));
	
	if(musicData){
		$scope.musicList=musicData;
		$scope.play=function(index){
			resetMusicPlay(musicData,index);
		}
		$scope.download=function(index){
	    	download(musicData,index);
	    }
	    qAlert();
		return;
	}
	qAlert('正在加载音乐...');
	$http.get("apis/playlist.php?songId="+songId)
    .success(function(musicData) {
		$scope.musicList=musicData;
		localStorage.setItem("music-"+songId,JSON.stringify(musicData));
		if(musicData==''){
	        qAlert('没有搜索到歌曲!');
	    }else{
	    	qAlert();
	    }

		$scope.play=function(index){
			resetMusicPlay(musicData,index);
		}
		$scope.download=function(index){
	    	download(musicData,index);
	    }
    });	

});

//搜索歌单
app.controller("searchCtrl",function($scope,$http,$stateParams){
	$scope.search = function(e){
        var keycode = window.event?e.keyCode:e.which;
        if(keycode==13){
        	window.location.href="#/search/"+$scope.songId;
        }
    };
});