
angular.module('myApp').controller('myProjectsController',function($scope){
     // 数据源
    $scope.items = [{
        No: "P17081101",
        Name: "Home IoT toolkits",
        Discription:"A toolkit for traditional appliance....",
        Manager:"Lieo",
        Status:"WIP(DIP)",
        etd_atd:"2017-12-01/NA",
        pay_status:"$1,000($800)"
    }];
    // 为 reset功能而做的准备，ng中数组的复制，注意使用 angular.copy()和不使用的效果
    $scope.resetArr = angular.copy($scope.items);

    // 接收删除事件，使用 splice()而不是slice()
    $scope.$on("remove", function(event, data) {
        $scope.items.splice(data, 1);
    });
    // ng-repeat 重复元素上面定义的ng-controller互不影响
}).controller("row", function($scope) {
    $scope.varlist = {
        isreadonly: true
    }
})  