angular
    .module("movieFlixApp")
    .controller('addTitleController', function($state, movieFlixService){
        var vm=this;
        vm.submit = submit;

        function submit (){
            movieFlixService.addNewTitle(vm);
            $state.go('showAllTitles');
        }
    });

