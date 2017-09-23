angular.module('myApp').controller('projectDetailController',function($scope){
    $scope.items = [{
        Item:"BOM",
        Attachment:"bom_0920.xlsx",
        LastUpdate:"2017-09-21 20:12:11",
        Version:4,
        Status:"Ready"
    }];
    // 为 reset功能而做的准备，ng中数组的复制，注意使用 angular.copy()和不使用的效果
    $scope.resetArr = angular.copy($scope.items);

    // 接收删除事件，使用 splice()而不是slice()
    $scope.$on("remove", function(event, data) {
        $scope.items.splice(data, 1);
    });
    // ng-repeat 重复元素上面定义的ng-controller互不影响
})