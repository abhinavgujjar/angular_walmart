angular.module('discoHotel').controller('detailsController',

	function($scope, hotelsProvider, $routeParams) {


		var hotel = hotelsProvider.selectedHotel;


		if (!hotel) {
			var hotelId = $routeParams.hotelId;

			hotelsProvider.getHotel(hotelId).then(function(hotel) {
				$scope.hotel = hotel;
			})

		} else {
			$scope.hotel = hotel;
		}

	});