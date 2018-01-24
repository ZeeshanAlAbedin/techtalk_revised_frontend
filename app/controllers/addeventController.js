app.controller('addeventController', function ($scope, $http) {
    
    //Get list of users
    $scope.getAllusers = function(){
        
         $http.get('http://localhost:51047/api/user/getUsers')
            .then(function successCallback(response) {
             console.log(response);   
             $scope.rows = response.data;
             

            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
        
    }
    
    //test function
    $scope.testfun = function(){
        
        console.log($scope.selectedUserID);
    }
    
    
    
    
    

    $scope.registerEvent = function () {
        
        //check whether date is passed or not
        console.log($scope.edate);
        var formatedDate = moment($scope.edate).format('YYYY MM DD');
        var todaysDate = new moment().format('YYYY MM DD');
        if(formatedDate >= todaysDate){
            console.log("upcoming");
            $scope.addEventFunction();
        }
            
        else {
            var confirmChoice = confirm("Do you want to add a past already passed event?");
        if(confirmChoice == true){
            $scope.addEventFunction();  
        }
        else 
            alert("Event addition cancelled");
            
        }
        
        //console.log(formatedDate);
        //console.log(todaysDate);

    }
    
    
    
    $scope.addEventFunction = function (){
        
        var EventObj = {
            ename: $scope.ename,
            edescription: $scope.edes,
            scheduledOn: $scope.edate,
            userID: $scope.selectedUserID
        };

            var condit = confirm("Upload Data?");
            if (condit == true) {
                $http.post('http://localhost:51047/api/event/PostEventTable', EventObj)
                    .then(function successCallback() {
                        alert("Success");
                    }, function errorCallback() {
                        alert("Failure");
                    });

            } else
                alert("Upload Canceled");
        
    }

});