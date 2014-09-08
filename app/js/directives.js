
angular.module('discoHotel').directive('previewText', function(){
    
    //directive definition object
    return {
        restrict :'E',
        templateUrl : 'partials/preview.html',
        scope : {
            description : '=desc',
            rows : '@',
            tapMe : '&'
        }
    }
})