angular.module('myApp').controller('serviceController',function($rootScope,$scope,){
    $scope.flag = true;
    $scope.isActive = true;
    $scope.list = function(){     
        $scope.isHidden = $scope.flag;
        $scope.isActive = !$scope.flag;
    };
    $scope.grid = function(){
        $scope.isHidden = !$scope.flag;
        $scope.isActive = $scope.flag;
    };
})