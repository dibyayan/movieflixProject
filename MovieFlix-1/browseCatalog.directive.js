angular
.module('movieFlixApp')
.directive('browseCatalogModal', browseCatalogModalDirectiveFunction);

function browseCatalogModalDirectiveFunction(){

    var directive = {
        restrict: 'A',
        templateUrl: 'App/Features/browseCatalog/browseCatalog.template.html',
        scope: { },
        transclude: true,
        //require: 'ngModel',
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl){

        el.bind("click", function() {
            displayBrowseCatalogModal();
        });

        function displayBrowseCatalogModal(){
            scope.display = true;
        }

        scope.closeModal = function(){
            scope.display = false;
        }

    }


}