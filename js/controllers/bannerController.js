angular.module('myApp').controller('bannerController', function ($scope) {
        $scope.Data = [
            { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504806607120&di=90e0217bb90a2fa8811abb9a7449bbcf&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2013%2Fmxy%2F0607%2F1%2F13.jpg", desp: "描述1" },
            { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504806910113&di=7291f654b956f5578c61e3329e011d46&imgtype=0&src=http%3A%2F%2Fimg01.taopic.com%2F160601%2F240384-16060113132752.jpg", desp: "描述2" },
            { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504806605766&di=83125ac8adf3ccb940718d57b9f0d5d8&imgtype=0&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1011%2F112G6002358%2F16112F02358-1.jpg", desp: "描述3" },
            { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504806605760&di=fa147ae19547548d006d9766fa165808&imgtype=0&src=http%3A%2F%2Fpic36.nipic.com%2F20131203%2F3822951_101052690000_2.jpg", desp: "描述4" },
            { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504806607122&di=62db66cc1865c8bf57a404ad51ced313&imgtype=0&src=http%3A%2F%2Fpic76.nipic.com%2Ffile%2F20150826%2F12702443_165135194000_2.jpg", desp: "描述5" },
            { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504806615806&di=baeb05362ccf4dcf776b745e82073ce4&imgtype=0&src=http%3A%2F%2Fpic33.photophoto.cn%2F20141218%2F0034034880130871_b.jpg", desp: "描述6" },
            { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504806605769&di=1fbfb34e0ded97534d309edbf6498c3a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb8014a90f603738db70ae707b91bb051f819ec57.jpg", desp: "描述7" },
        ];
    })
.directive('rnStepper', function () {
    return {
        restrict: 'AE',
        require: 'ngModel',
        scope: {},
        template: '<ul class="lbtul" ng-style="{width:ulSumWidth}" ng-touchmove="touchFunction($event)" ng-touchstart="touchFunction($event)" ng-touchend="touchFunction($event)">' +
                  '<li ng-repeat="one in Data" ng-style="{width:width}"><img ng-src="{{ one.src }}"/><label>{{ one.desp }}</label></li>' +
                  '</ul>' +
                  '<ul class="lbtnav"><li ng-repeat="one in DataMember" ng-click="qhimg()"></li></ul>',
        link: function (scope, iElement, iAttrs, ngModelController) {
            scope.nowPage = 1; //当前图片索引
            scope.maxPage = 0; //数据总长度
            scope.ulSumWidth = 0; //图片ul总宽度
            scope.width = document.body.offsetWidth; //当前屏幕宽度
            ngModelController.$render = function () {
                scope.Data = ngModelController.$viewValue; //数据源
                scope.DataMember = JSON.parse(JSON.stringify(scope.Data)); //分页数据源
                var lastData = JSON.parse(JSON.stringify(scope.Data[scope.Data.length - 1]));
                var fistData = JSON.parse(JSON.stringify(scope.Data[0]));
                scope.Data.unshift(lastData);
                scope.Data.push(fistData);
                scope.maxPage = scope.Data.length; //数据总长度
                scope.ulSumWidth = scope.maxPage * scope.width; //图片ul总宽度
                //刚开始设置ul的滚动速度为0s，因为要先把第一张图片展示出来，然后再修改为1s
                iElement.find("ul")[0].style.transition = "0s left";
                iElement.find("ul")[0].style.left = -(scope.nowPage * scope.width);
                setTimeout(function () {
                    iElement.find("ul")[0].style.transition = "1s left";
                }, 2000);
                //设置第一张图片为选中状态
                setTimeout(function () {
                    iElement.find("ul")[1].children[0].className = "selected";
                    scope.liSelected = iElement.find("ul")[1].children[0];
                }, 100);
                //定时滚动图片
                scope.LbInvert = setInterval(function () {
                    scope.Invert_RollImg();
                }, 2000);
            };
            scope.qhimg = function () {
                iElement.find("ul")[0].style.transition = "1s left";
                var sumZ = this.$index * scope.width;
                iElement.find("ul")[0].style.left = -((this.$index + 1) * scope.width) + "px";
                scope.nowPage = this.$index;
                if (scope.liSelected)
                    scope.liSelected.className = "";
                iElement.find("ul")[1].children[scope.nowPage].className = "selected";
                scope.liSelected = iElement.find("ul")[1].children[scope.nowPage];
                scope.nowPage = scope.nowPage + 1;
                clearInterval(scope.LbInvert);
                scope.LbInvert = setInterval(function () {
                    scope.Invert_RollImg();
                }, 2000);
            }
            scope.touchFunction = function (event) {
                document.getElementById("labSm").innerHTML = event.type;
                switch (event.type) {
                    case "touchstart":
                        scope.X = event.touches[0].clientX;
                        clearInterval(scope.LbInvert);
                        iElement.find("ul")[0].style.transition = "inherit";

                        if (scope.nowPage == 1)
                            iElement.find("ul")[0].style.left = -(scope.nowPage * scope.width) + "px";
                        else if (scope.nowPage == scope.maxPage - 2)
                            iElement.find("ul")[0].style.left = -(scope.nowPage * scope.width) + "px";

                        scope.Left = parseInt(iElement.find("ul")[0].style.left.replace("px", "") || 0);
                        break;
                    case "touchmove":
                        if (event.touches.length > 0) {
                            var moveX = 0;
                            scope.touchMoveX = event.touches[0].clientX;
                            if (event.touches[0].clientX > scope.X) {
                                moveX = scope.X - event.touches[0].clientX;
                                moveX = scope.Left - moveX;
                                scope.trun = "right";
                            }
                            else {
                                moveX = scope.X - event.touches[0].clientX;
                                moveX = scope.Left + -moveX;
                                scope.trun = "left";
                            }
                            iElement.find("ul")[0].style.left = moveX;
                            scope.moveX = moveX;
                        }
                        break;
                    case "touchend":
                        iElement.find("ul")[0].style.transition = "1s left";
                        scope.LbInvert = setInterval(function () {
                            scope.Invert_RollImg();
                        }, 2000);
                        if (Math.abs(scope.touchMoveX - scope.X) < scope.width / 3) {
                            iElement.find("ul")[0].style.left = -(scope.nowPage * scope.width) + "px";
                            return;
                        }
                        scope.nowPage = scope.trun == "left" ? scope.nowPage + 1 : scope.nowPage - 1;
                        var boolTrue = false;
                        if (scope.nowPage > scope.maxPage - 2) {
                            iElement.find("ul")[0].style.left = -(scope.nowPage * scope.width) + "px";
                            scope.nowPage = 1;
                            boolTrue = true;
                        }
                        else if (scope.nowPage <= 0) {
                            iElement.find("ul")[0].style.left = "0px";
                            scope.nowPage = scope.maxPage - 2;
                            boolTrue = true;
                        }
                        if (scope.liSelected)
                            scope.liSelected.className = "";
                        iElement.find("ul")[1].children[scope.nowPage - 1].className = "selected";
                        scope.liSelected = iElement.find("ul")[1].children[scope.nowPage - 1];

                        if (!boolTrue)
                            iElement.find("ul")[0].style.left = -(scope.nowPage * scope.width) + "px";
                        break;
                }
            }

            //定时滚动图片
            scope.Invert_RollImg = function () {
                scope.width = scope.width;
                iElement.find("ul")[0].style.left = -((iElement.find("ul")[0].style.left == "0px" ? 1 : (scope.nowPage + 1)) * scope.width) + "px";

                if (scope.nowPage >= scope.maxPage - 2) {
                    scope.nowPage = 0;
                    setTimeout(function () {
                        iElement.find("ul")[0].style.transition = "0s left";
                        iElement.find("ul")[0].style.left = -(1 * scope.width) + "px";
                    }, 1000);
                    clearInterval(scope.LbInvert);
                    scope.LbInvert = setInterval(function () {
                        iElement.find("ul")[0].style.transition = "1s left";
                        scope.Invert_RollImg();
                    }, 2000);
                }
                scope.nowPage = scope.nowPage + 1;
                if (scope.liSelected)
                    scope.liSelected.className = "";
                iElement.find("ul")[1].children[scope.nowPage - 1].className = "selected";
                scope.liSelected = iElement.find("ul")[1].children[scope.nowPage - 1];
            }
        }
    };
});