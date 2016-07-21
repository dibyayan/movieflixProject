angular
    .module("movieFlixApp")
    .controller('browseCatalogController', function($state){
        var vm=this;
        vm.closeModal = closeModal;

        function closeModal(){
            $state.go('showAllTitles');
        }
    // if you click on the cross or close link
        // it will transfer to showAllTitles state

    });

