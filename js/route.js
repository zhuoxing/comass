app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("/home");
    $stateProvider.state('home',{
        url: "/home",
        templateUrl: "./pages/home.html",
        data: {
            pageTitle: 'home'
        },
        controller: "homeController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'myApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'js/controllers/homeController.js',
                    ]
                });
            }]
        }

    }).state('register',{
        url: "/home/register",
        templateUrl: "./pages/register.html",
        data: {
            pageTitle: 'register'
        },
        controller: "registerController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'myApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'js/controllers/registerController.js',
                    ]
                });
            }]
        }
    }).state('login',{
        url: "/home/login",
        templateUrl: "./pages/login.html",
        data: {
            pageTitle: 'login'
        },
        controller: "loginController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'myApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'js/controllers/loginController.js',
                    ]
                });
            }]
        }
    }).state('about-us',{
        url: "/home/about-us",
        templateUrl: "./pages/about-us.html",
        data: {
            pageTitle: 'about-us'
        },
        controller: "about-usController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'myApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'js/controllers/about-usController.js',
                    ]
                });
            }]
        }
    }).state('contact-us',{
        url: "/home/contact-us",
        templateUrl: "./pages/contact-us.html",
        data: {
            pageTitle: 'contact-us'
        },
        controller: "contact-usController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'myApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'js/controllers/contact-usController.js',
                    ]
                });
            }]
        }
    }).state('service',{
        url: "/home/service",
        templateUrl: "./pages/service.html",
        data: {
            pageTitle: 'service'
        },
        controller: "serviceController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'myApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'js/controllers/serviceController.js',
                        'js/controllers/modalController.js',
                    ]
                });
            }]
        }
    }).state('PCB-service',{
        url: "/home/PCB-service",
        templateUrl: "./pages/PCB-service.html",
        data: {
            pageTitle: 'PCB-service'
        },
        controller: "PCB-Controller",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'myApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'js/controllers/PCB-Controller.js',
                        'lib/js/ng-file-upload-shim.js',
                        'lib/js/ng-file-upload.js'
                    ]
                });
            }]
        }
    }).state('electronic-service',{
        url: "/home/electronic-service",
        templateUrl: "./pages/electronic-service.html",
        data: {
            pageTitle: 'electronic-service'
        },
        controller: "electronic-Controller",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'myApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'js/controllers/electronic-Controller.js',
                        'lib/css/ng-table.min.css',
                    ]
                });
            }]
        }
    }).state('projects',{
        url: "/home/projects",
        templateUrl: "./pages/projects.html",
        data: {
            pageTitle: 'projects'
        },
        controller: "projectsController",
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'myApp',
                    insertBefore: '#ng_load_plugins_before',
                    files: [
                        'js/controllers/projectsController.js',
                        'lib/css/ng-table.min.css',
                    ]
                });
            }]
        }
    })
}])