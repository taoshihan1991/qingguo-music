<?php
// 歌单的id
$action=isset($_GET['action']) ? $_GET['action'] : 'index';
switch ($action) {
	case 'index':
		$songId=405369090;
		break;
	case 'china':
		$songId=422120471;
		break;
	case 'movie':
		$songId=424038303;
		break;
	case 'young':
		$songId=37917950;
		break;
}
$songId=isset($_GET['songId']) ? intval($_GET['songId']) : $songId;

$neteast=https_request("http://music.163.com/api/playlist/detail?id={$songId}");
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


function https_request($url,$data = null){
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
	if (!empty($data)){
	curl_setopt($curl, CURLOPT_POST, 1);
	curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
	}
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	$output = curl_exec($curl);
	curl_close($curl);
	return $output;
}