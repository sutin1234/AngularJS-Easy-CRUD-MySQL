<?php 
	include_once 'config.php';
	$input = json_decode(file_get_contents('php://input'));
	$sql = "update  Mobile set name = '{$input->name}', version = '{$input->version}', os = '{$input->os}' where idx = '{$input->idx}'";
	if(mysql_query($sql)){
		echo 1;
	}else{
		echo mysql_error();
	}
 ?>