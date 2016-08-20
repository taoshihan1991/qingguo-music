//音乐首页
app.controller("musicIndex",function($scope,$http){
	var musicData=JSON.parse(localStorage.getItem("music"));
	$scope.download=function(index){
    	download(musicData,index);
    }
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
		$scope.download=function(index){
	    	download(musicData,index);
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
		$scope.download=function(index){
	    	download(musicData,index);
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
		$scope.download=function(index){
	    	download(musicData,index);
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
		$scope.download=function(index){
	    	download(musicData,index);
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
		$scope.download=function(index){
	    	download(musicData,index);
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
		$scope.download=function(index){
	    	download(musicData,index);
	    }
    });		
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
		return;
	}

	$http.get("apis/playlist.php?action=index&songId="+songId)
    .success(function(musicData) {
		$scope.musicList=musicData;
		localStorage.setItem("music-"+songId,JSON.stringify(musicData));
		if(musicData==''){
	        $('.qMusicBox').html('<div style="margin:100px 0;color:#999;text-align:center;font-size:50px;font-family:\'Microsoft Yahei\'">没有搜索到歌曲！</div>');
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