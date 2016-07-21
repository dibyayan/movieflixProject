angular.module("movieFlixApp")
    .controller('signInController', function($state){
        var vm=this;
        vm.activate=activate;
        vm.submitSignInForm=submitSignInForm;
        vm.email="";
        vm.password="";


        function activate(){

        }

        function submitSignInForm(){
            $state.go("showAllTitles");
        }

    })

