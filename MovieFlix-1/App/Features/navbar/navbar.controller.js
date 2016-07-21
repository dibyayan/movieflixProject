angular
    .module("movieFlixApp")
    .controller('navbarController', function($rootScope, movieFlixService){
        var vm=this;
        vm.filterResults = filterResults;
        vm.search="";

        function filterResults(){
            movieFlixService.setSearch(vm.search);
            $rootScope.$broadcast('filter');
        }
    });

