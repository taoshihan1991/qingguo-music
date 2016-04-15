<?php
// 歌单的id
$neteast=file_get_contents("http://music.163.com/api/playlist/detail?id=362664951");
$neteastJson=json_decode($neteast,true);
if($neteastJson['code']==200){
	$songs=$neteastJson['result']['tracks'];
	$result=array();
	foreach($songs as $song){
		$temp=array();
		$temp['title']=$song['album']['name'];
		$temp['author']=$song['artists'][0]['name'];
		$temp['url']=$song['mp3Url'];
		$temp['pic']=$song['album']['picUrl'];
		$result[]=$temp;
	}

	echo json_encode(($result));
}
