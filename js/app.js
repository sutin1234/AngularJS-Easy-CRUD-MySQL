var app = angular.module('APP',[])

app.controller('MyCtrl',function($scope,$http){

		$scope.dataMobile = {};

		$http.get('servers/load_json.php').success(function(data){
			$scope.dataMobile = data;
		});


	//init
	$scope.showAdd = false; // hide form add
	$scope.showEdit = false; // hide form edit
	//$scope.dataMobile = MobileService.get();

	// actions
	$scope.AddForm = function(){
		$scope.showAdd = true;
	}

	$scope.onAdd = function(Mobile){
		$scope.dataMobile.push(Mobile);

		$http.post('servers/add.php',Mobile).success(function(data){
			if(data == 1){
				alert('added!');
			}else{
				alert('error!'+data);
			}
		});

		$scope.Mobile = [];
		$scope.showAdd = false;
	}

	$scope.onDel = function(index,Mobile){
		$scope.dataMobile.splice(index,1);
		$http.post('servers/del.php',Mobile).success(function(data){
			if(data == 1){
				alert('del!');
			}else{
				alert('error!');
			}
		});
	}

	$scope.onEdit = function(Mobile){
		$scope.Mobile = Mobile;
		$scope.showEdit = true;
	}
	$scope.onSave = function(index,Mobile){
		$scope.dataMobile[index] = Mobile;

		$http.post('servers/save.php',Mobile).success(function(data){
			if(data == 1){
				alert('saved!');
			}else{
				alert('error!'+data);
			}
		});

		$scope.Mobile = [];
		$scope.showEdit = false;
	}
	
})







