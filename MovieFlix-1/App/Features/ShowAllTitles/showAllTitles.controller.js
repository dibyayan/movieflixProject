angular
    .module("movieFlixApp")
    .controller('showAllTitlesController', function($rootScope, movieFlixService){
        var vm=this;
        vm.activate=activate;
        vm.deleteTitle=deleteTitle;

        vm.titles=[];

        $rootScope.$on('filter', function () {
            vm.search = movieFlixService.getSearch();
        });

        function showAllTitles(){
            vm.titles=movieFlixService.getTitles();
        }

        function activate(){
            showAllTitles();
        }

        function deleteTitle(index){
            movieFlixService.deleteTitle(index);
            showAllTitles();
        }

        activate();

    });