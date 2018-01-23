app.controller('eventdetailsController', function ($scope, $http, $routeParams) {
    
    $scope.id = $routeParams.id;
   


            $scope.eventDetails = function () {

                $http.get('http://localhost:51047/api/event/GetAllEventsbyID/'+ $scope.id)
                    .then(function successCallback(response) {
                        console.log("Success");
                        $scope.res = response.data;
                        console.log($scope.res);
                    }, function errorCallback(response) {
                        console.log("Unable to perform get request");
                    });

            }

            $scope.userInterested=function(){

                var euser={
                    eventId:$scope.id ,
                    userId:1
                }

               $http.post('http://localhost:51047/api/event/PostEventUser', euser)
                    .then(function successCallback() {
                        alert("Success");
                    }, function errorCallback() {
                        alert("Failure");
                    });
            }

        });