angular
    .module("movieFlixApp")
    .controller('editTitleController', function($state, movieFlixService, $stateParams){
        var vm=this;
        vm.submit = submit;
        vm.activate = activate;

        function activate(){
            loadTitleDetails($stateParams.id);
        }

        function loadTitleDetails(id){
            vm.title = movieFlixService.getTitleById(id);
        }

        function submit (){
            movieFlixService.editTitle(vm.title);
            $state.go('showAllTitles');
        }

        activate();


    });

