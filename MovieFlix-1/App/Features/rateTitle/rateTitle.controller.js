angular
    .module("movieFlixApp")
    .controller('rateTitleController', function($state, $stateParams, movieFlixService){
        var vm=this;
        vm.closeModal = closeModal;
        vm.activate = activate;
        vm.submit=submit;

        activate();

        function activate(){
            loadTitleDetails($stateParams.id);
        }

        function loadTitleDetails(id){
            vm.title = movieFlixService.getTitleById(id);
        }

        function submit(){
            movieFlixService.editTitle(vm.title);
            $state.go('showAllTitles');
        }

        function closeModal(){
            $state.go('showAllTitles');
        }
        // if you click on the cross or close link
        // it will transfer to showAllTitles state

    });

