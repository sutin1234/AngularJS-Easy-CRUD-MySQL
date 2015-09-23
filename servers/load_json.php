<?php 
	header('Access-Control-Allow-Origin: http://localhost');
	header('Access-Control-Allow-Methods: GET, POST');
	include_once 'config.php';
	$sql = "select * from Mobile";
	$result= mysql_query($sql);
	$obj = array();
	while($data = mysql_fetch_object($result)){
		$obj[] = $data;
	}

	echo json_encode($obj);
 ?>