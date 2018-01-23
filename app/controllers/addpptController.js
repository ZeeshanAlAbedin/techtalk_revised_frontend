app.controller('addpptController', function($scope, $http, $rootScope){
    
    
    $scope.getAllEvents = function(){
        
         $http.get('http://localhost:51047/api/event/GetAllEvents')
            .then(function successCallback(response) {
             console.log("Success");   
             $scope.rows = response.data;
             
             

            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
        
    }
    
    $scope.uploadPPT = function(){
        
        $http.post('http://localhost:51047/api/event/PostPPT')
        .then(function successCallback(){
            
        }, function errorCallback(){
            
        })
    }
    
});