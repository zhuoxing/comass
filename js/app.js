var app = angular.module("myApp", [
    "ngFileUpload",
    "ui.router",
    "ngAnimate",
    'ngSanitize',
    "ui.bootstrap",
    "oc.lazyLoad",
]);

app.run(['$rootScope', '$location', '$state','$transitions', function($rootScope, $location, $state, $transitions) {
/*      $transitions.onStart({ }, function(trans) {
            console.log($location.path());
        });*/
        $transitions.onSuccess({ }, function(trans) {
            /*console.log($location.path());*/
            $rootScope.indexUrl = '/home';
            $rootScope.url = $location.path();
        });
        // 若是从tabs.orderList页面跳转到tabs.post页面，则触发事件
       /* $transitions.onStart({ to: 'home', from:'tabs.orderList'}, function(trans) {
                console.log($location.path());

                $location.path();//获取路由地址

                $location.path('/tabs/home');//设置路由地址
                console.log($location.path());
        });*/
    }
]);
// app.run(['$rootScope', '$location', '$cookieStore', '$state', function($rootScope, $location,$cookieStore, $state){
// //监听路由事件
//         $rootScope.$on('$stateChangeStart',
 
//             function(event, toState, toParams, fromState, fromParams){
//                 console.log('sdfd');
//                         console.log($location.path());
//                /* if(toState.name=="tabs.post"&&fromState.name=="tabs.orderList"){*/
 
//                      //$location.path();//获取路由地址
 
//                     /*$location.path('/tabs/home');//设置路由地址*/
 
//               /*  }*/
 
//         })
 
// }]);
app.controller('indexControl', ['$scope', '$rootScope', '$location',function($scope, $rootScope,$location){
/*
    $rootScope.indexUrl = '/home';
    $rootScope.url = $location.path();
    $scope.$watch('url',function(newValue,oldValue, scope){
        console.log(newValue);
        console.log(oldValue);
    });*/
/*    $scope.$applyAsync(function() {  
        $rootScope.url = $location.path();
    });*/ 
   /* $scope.$applyAsync(); */
}]);

app.controller('modalController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.modalShow = true;
    $scope.clickShow = function(){
        $scope.modalShow = false;
    }

}]);
