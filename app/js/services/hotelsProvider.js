/*global angular*/

'use strict';


angular.module('discoHotel').factory('hotelsProvider',
    function($http, $timeout, $q, parseHeaders) {

        return {
            getHotels: function() {

                var deferred = $q.defer();

                var op = $http.get('https://api.parse.com/1/classes/Hotel', {
                    headers: parseHeaders,
                    transformResponse : function(rawData){
                        var json = angular.fromJson(rawData);

                        return json.results;
                    }

                })

                op.then(function(response){
                    console.log(response);
                });

                op.success(function(hotels) {

                    $timeout(function() {
                        deferred.resolve(hotels);
                    });

                }).error(function(error) {
                    //alert(error);

                    deferred.reject('could not find hotels');
                });

                return deferred.promise;

            },
            getHotel: function(id) {

                var deferred = $q.defer();

                $http.get('https://api.parse.com/1/classes/Hotel/' + id, {
                    headers:parseHeaders

                }).success(function(hotel) {

                    deferred.resolve(hotel);

                }).error(function(error) {
                    //alert(error);

                    deferred.reject('could not find your hotel');
                });

                return deferred.promise;

            },
            addHotel: function(hotel) {
                //hotels.push(hotel);

                $http.post('https://api.parse.com/1/classes/Hotel', hotel, {
                    headers: parseHeaders

                });

            }

        };
    });



//greetingController(???)