app.controller("HomeCtrl",function ($scope,$location){
	$(".home-container").css("height",window.innerHeight);
	$(".home-container-sec").css("height",window.innerHeight);

	$scope.goTo = function(url){
		$location.path(url);
	}
	$scope.map = { center: { latitude: 19.07598, longitude: 72.87766 }, zoom: 15 };
	$scope.marker = {
      id: 0,
      coords: {
        latitude: 19.07598,
        longitude: 72.87766
      }
    }
   
    $scope.selectedIndx = 0;
    $scope.activeTab = function(url){
    	if(url==$location.path()){
    		return true;
    	}
    	else{
    		return false;
    	}
    }
})