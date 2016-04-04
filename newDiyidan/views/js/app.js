var diyidanApp = angular.module('diyidanApp', ['ui.router', 'ngGrid', 'BookListModule', 'BookDetailModule']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
diyidanApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
diyidanApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls/home.html'
                },
                'header@index': {
                    templateUrl: 'tpls/header.html'
                },
                'middle@index': {
                    templateUrl: 'tpls/middle.html'
                },
                'footer@index': {
                    templateUrl: 'tpls/footer.html'
                }
            }
        })
        .state('personalIndex', {
            // url: '/{personalIndex:[0-9]{1,4}}',
            url:'/personalIndex',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/personalIndex.html'
                },
                'my_mlddle@personalIndex': {
                    templateUrl: 'tpls/my_middle.html'
                },
                'footer@personalIndex': {
                    templateUrl: 'tpls/footer.html'
                }
            }
        })
        .state('hostSpot', {
            url: '/hostSpot',
            views: {
                '': {
                    templateUrl: 'tpls/hostSpot.html'
                },
                'header@hostSpot': {
                    templateUrl: 'tpls/header.html'
                },
                'host@hostSpot': {
                    templateUrl: 'tpls/host.html'
                },
                'footer@hostSpot': {
                    templateUrl: 'tpls/footer.html'
                }
            }
        })
        .state('个人主页', {
            url: '/bookdetail/:bookId', //注意这里在路由中传参数的方式
            templateUrl: 'tpls/bookDetail.html'
        })
});
