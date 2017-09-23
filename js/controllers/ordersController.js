angular.module('myApp').controller('ordersController',function($scope){
     // 数据源
    $scope.items = [{
        OrderNo: "张三",
        Description: 50,
        OrderDate:"Layer2",
        Status:"Traceable",
        total:200.00
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
}); 
    // 下面是四个指令
app.directive("delete", function() {
    return {
        restrict: "E",
        replace: true,
        template: "<input type = 'button' value = 'delete' ng-click='remove($index)'>",
        link: function(scope, element, attr) {
            scope.remove = function($index) {
                scope.$emit("remove", $index);

            }
        }
    }
});