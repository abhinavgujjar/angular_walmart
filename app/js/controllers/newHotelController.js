angular.module('discoHotel').controller('newHotelController',

	function($scope, hotelsProvider, $location) {

		$scope.alertDesc = function(test){
			alert(test);
		}

		$scope.hotel = {
			description : " Default description",
			name : 'Default name'
		}

		$scope.step = 1;
		$scope.moveNext = function(){
			$scope.step++;
		}
		$scope.movePrev = function(){
			$scope.step--;
		}

		$scope.addHotel = function(form, hotel) {
			if (form.$invalid) {
				alert('NOT VALID');
			} else {

				hotelsProvider.addHotel(hotel);

				$location.url('/listing');
			}
		}
	});