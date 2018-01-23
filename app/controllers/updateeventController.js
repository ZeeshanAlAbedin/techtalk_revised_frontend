app.controller('updateeventController', function($scope, $http){
   
    $scope.getAllEvents = function(){
        
         $http.get('http://localhost:51047/api/event/GetAllEvents')
            .then(function successCallback(response) {
             console.log("Success normal get");   
             $scope.rows = response.data;
             
             

            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
        
    }
    
    
    //get events by ID
    $scope.eventDetails =  function (evid) {

                $http.get('http://localhost:51047/api/event/GetAllEventsbyID/'+ evid)
                    .then(function successCallback(response) {
                        console.log("Success id get");
                        $scope.res = response.data;
                        //console.log($scope.res);
                    }, function errorCallback(response) {
                        console.log("Unable to perform get request");
                    });
        return $scope.res;
            }
    
    
    
    
    $scope.updateEvent = function (eventID) {
        
        var res1 = $scope.eventDetails(eventID);
        
        var updateData = {
            //id: eventID,        
            ename: $scope.jqEname,
            userID: $scope.selectedUserID,
            edate : $scope.jqEdate
            
        };
        
        console.log("Data="+res1);
        /*$http.put(APIURL + '/PutEventTable/'+eventID, updateData)
        .success(function (){
            alert("Updation successful");
            $scope.childMethod = function(){
                $rootScope.$emit("CallgetAPI", {});
            }
            
        })
        .error(function (){
            console.log("ERROR!!!");
        });*/
    };
    
    
    
   
    
    
    
});