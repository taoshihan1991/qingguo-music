<?php
//下载
$url=$_POST['url'];
$title=$_POST['title'];

downloadFile($url,$title);
function downloadFile($file,$fileName){ 
    $mime = 'application/force-download'; 
    header('Pragma: public'); 
    header('Expires: 0');
    header('Cache-Control: must-revalidate, post-check=0, pre-check=0'); 
    header('Cache-Control: private',false); 
    header('Content-Type: '.$mime); 
    header('Content-Disposition: attachment; filename="'.urlencode($fileName).'.mp3"'); 
    header('Content-Transfer-Encoding: binary'); 
    header('Connection: close'); 
    $out=readFile($file);
    echo $out;
    exit(); 
}
function https_request($url){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($curl);
    curl_close($curl);
    return $output;
}