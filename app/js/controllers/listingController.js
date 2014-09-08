
angular.module('discoHotel').controller('listingController',
    function($scope, uiConfig, hotelsProvider, votingService) {

        $scope.descLimit = uiConfig.descLimit;


        hotelsProvider.getHotels().then(function(hotels){

            $scope.hotels = hotels;
        }, function(error){
            $scope.error = error;
        });


        $scope.upVote = function(hotel) {
            votingService.upVote(hotel);
        }

        $scope.downVote = function(hotel) {
            votingService.downVote(hotel);
        }


        $scope.toFeet = function(input) {
            return input * 10.7639;
        }

    });

