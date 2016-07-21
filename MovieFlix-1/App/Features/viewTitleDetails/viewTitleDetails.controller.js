angular
    .module("movieFlixApp")
    .controller('viewTitleDetailsController', function($state, $stateParams, movieFlixService){
        var vm=this;
        vm.closeModal = closeModal;
        vm.activate = activate;

        activate();

        function activate(){
            loadTitleDetails($stateParams.id);
        }

        function loadTitleDetails(id){
            vm.title = movieFlixService.getTitleById(id);
        }

        function closeModal(){
            $state.go('showAllTitles');
        }
        // if you click on the cross or close link
        // it will transfer to showAllTitles state

    });

