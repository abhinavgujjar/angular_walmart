// Code goes here
'use strict';

//details discohotel
angular.module('discoHotel', ['ngRoute'])
.config(['$routeProvider',

    function($routeProvider) {

        $routeProvider.when('/listing', {
            templateUrl: 'partials/listing.html',
            controller : 'listingController'
        });
      
        $routeProvider.when('/new', {
            templateUrl: 'partials/create.html'
        });
         $routeProvider.when('/details/:hotelId', {
            templateUrl: 'partials/details.html',
            controller : 'detailsController'
        });
       
        $routeProvider.otherwise( {
            redirectTo: '/listing'
        });
      
    }
]);


angular.module('discoHotel').filter('toFeet', function() {
    return function(input, suffix) {
        suffix = suffix ? suffix : ' ';

        return String(input * 10.7639) + ' ' + suffix;
    }
})

angular.module('discoHotel').filter('toPounds', function() {
    return function(input) {
        return input / 98.58;
    }
})


angular.module('discoHotel').value('uiConfig', {
    descLimit: 50,
    pageSize: 2
});

angular.module('discoHotel').value('parseHeaders', {
                        'X-Parse-Application-Id': 'VTWSWnJAkMedzSXCQJgsEfKoIIAtnEcpnRuT4uNk',
                        'X-Parse-REST-API-Key': 'HC3oyBVcUaHvAHs1BRJ8HeuqYtBActgToyeP5CNq',
                    });
