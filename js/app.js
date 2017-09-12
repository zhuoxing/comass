var app = angular.module("myApp", [
    "ngFileUpload",
    "ui.router",
    "ngAnimate",
    'ngSanitize',
    "ui.bootstrap",
    "oc.lazyLoad",
]);

app.controller('indexControl', ['$scope', '$rootScope', function($scope, $rootScope) { 
}]);

app.controller('modalController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.modalShow = true;
    $scope.clickShow = function(){
        $scope.modalShow = false;
    }

}]);
