app.controller('admindashboardController', function($scope, $http, $location){
    
    
    
    $scope.gotToAddUser = function(){
        console.log("Clicked");
        $location.path('/addUser');
    }
    
    $scope.gotToAddEvent = function(){
        console.log("Clicked");
        $location.path('/addEvent');
    }
    
    $scope.gotToRemoveEvent = function(){
        console.log("Clicked");
        $location.path('/removeEvent');
    }
    
    $scope.gotToUpdateEvent = function(){
        console.log("Clicked");
        $location.path('/updateEvent');
    }
    
    $scope.gotToaddpptEvent = function(){
        console.log("Clicked");
        $location.path('/uploadppt');
    }
    
    //Get all events
    $scope.getAllEvents = function(){
        
         $http.get('http://localhost:51047/api/event/GetAllEvents')
            .then(function successCallback(response) {
             console.log(response);   
             $scope.rows = response.data;
             

            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});