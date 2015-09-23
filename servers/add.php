<?php 
	include_once 'config.php';
	$input = json_decode(file_get_contents('php://input'));
	$sql = "insert into Mobile values(null,'{$input->name}','{$input->version}','{$input->os}')";
	if(mysql_query($sql)){
		echo 1;
	}else{
		echo mysql_error();
	}
 ?>