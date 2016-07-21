angular
    .module("movieFlixApp")
    .config(function($stateProvider, $urlRouterProvider){
        
        $urlRouterProvider.otherwise('/signIn');
        $stateProvider
            .state('signIn', {
                url:'/signIn',
                views: {
                    navbar:{
                        
                    },
                    content: {
                        templateUrl:'App/Features/SignIn/signIn.template.html',
                        controller: 'signInController',
                        controllerAs: 'signInCtrl'
                    }                    
                }
            })
            .state('showAllTitles', {
                url:'/showAllTitles',
                views: {
                    navbar:{
                        templateUrl: 'App/Features/navbar/navbar.html',
                        controller: 'navbarController',
                        controllerAs: 'navbarCtrl'
                    },
                    content: {
                        templateUrl:'App/Features/ShowAllTitles/showAllTitles.template.html',
                        controller: 'showAllTitlesController',
                        controllerAs: 'showAllTitlesCtrl'
                    }
                }
            })
            .state('browseCatalog', {
                url: '/browseCatalog',
                views: {
                    navbar:{
                        templateUrl: 'App/Features/navbar/navbar.html',
                        controller: 'navbarController',
                        controllerAs: 'navbarCtrl'
                    },
                    content: {
                        templateUrl:'App/Features/browseCatalog/browseCatalog.template.html',
                        controller: 'browseCatalogController',
                        controllerAs: 'browseCatalogCtrl'
                    }
                }
            })
            .state('addTitle', {
                url: '/addTitle',
                views: {
                    navbar:{
                        templateUrl: 'App/Features/navbar/navbar.html',
                        controller: 'navbarController',
                        controllerAs: 'navbarCtrl'
                    },
                    content: {
                        templateUrl:'App/Features/addTitle/addTitle.template.html',
                        controller: 'addTitleController',
                        controllerAs: 'addTitleCtrl'
                    }
                }
            })
            .state('editTitle', {
                url: '/editTitle/:id',
                views: {
                    navbar:{
                        templateUrl: 'App/Features/navbar/navbar.html',
                        controller: 'navbarController',
                        controllerAs: 'navbarCtrl'
                    },
                    content: {
                        templateUrl:'App/Features/editTitle/editTitle.template.html',
                        controller: 'editTitleController',
                        controllerAs: 'editTitleCtrl'
                    }
                }
            })
            .state('viewTitleDetails', {
                url: '/viewTitleDetails/:id',
                views: {
                    navbar:{
                        templateUrl: 'App/Features/navbar/navbar.html',
                        controller: 'navbarController',
                        controllerAs: 'navbarCtrl'
                    },
                    content: {
                        templateUrl:'App/Features/viewTitleDetails/viewTitleDetails.template.html',
                        controller: 'viewTitleDetailsController',
                        controllerAs: 'viewTitleDetailsCtrl'
                    }
                }
            })
            .state('rateTitle', {
                url: '/rateTitle/:id',
                views: {
                    navbar:{
                        templateUrl: 'App/Features/navbar/navbar.html',
                        controller: 'navbarController',
                        controllerAs: 'navbarCtrl'
                    },
                    content: {
                        templateUrl:'App/Features/rateTitle/rateTitle.template.html',
                        controller: 'rateTitleController',
                        controllerAs: 'rateTitleCtrl'
                    }
                }
            })
            .state('commentTitle', {
                url: '/commentTitle/:id',
                views: {
                    navbar:{
                        templateUrl: 'App/Features/navbar/navbar.html',
                        controller: 'navbarController',
                        controllerAs: 'navbarCtrl'
                    },
                    content: {
                        templateUrl:'App/Features/commentTitle/commentTitle.template.html',
                        controller: 'commentTitleController',
                        controllerAs: 'commentTitleCtrl'
                    }
                }
            })
        ;



    });
//config function is used here to 
// configure the states of ui router.
// This is an in built method of 
// angular.module provided by angular.