
angular.module('myApp').controller('electronic-Controller',function($scope){
      // 数据源
        $scope.items = [{
            name: "张三",
            age: 20,
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
        // 接收edit事件，因为不用jquery，所以使用ng-readonly指令来操作
        $scope.$on("edit", function() {
            $scope.varlist.isreadonly = false;
        });
    });
    // 下面是四个指令

    app.directive("edit", function() {
        return {
            restrict: "E",
            replace: true,
            // 这里是在模版中使用ng-click绑定事件，请试试在指令 上绑定事件的方式，有坑
            template: "<input type = 'button' value = 'edit' ng-click='edit()'>",
            link: function(scope, element, attr) {
                scope.edit = function() {
                    // 传递的true值是给 $scope.varlist.isreadonly 使用的，意思是改变只读状态
                    scope.$emit("edit", true);
                }

            }
        }
    }).directive("delete", function() {
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
    }).directive("reset", function() {
        return {
            restrict: "E",
            replace: true,

            template: "<input type = 'button' value = 'reset' ng-click='reset($index)'>",
            link: function(scope, element) {
                //代码很简单，但是你丫就是想不起来使用angualr.copy()
                scope.reset = function($index) {
                    scope.items[$index] = angular.copy(scope.resetArr[$index]);
                }

            }
        }
    }).directive("add", function() {
        return {
            restrict: "E",
            template: "<button ng-click = 'add()'>Add more file</button>",
            replace: true,
            link: function(scope) {
                scope.add = function() {
                    // 数据驱动
                    scope.items.push({});
                }
            }
        }
})