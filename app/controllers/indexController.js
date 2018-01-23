app.controller('indexController', function($scope, $http, $location){
   

    $scope.loginCheck = function (){

    	var userdata = {
            'username': $scope.email,
            'password': $scope.password
        };

 var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

$http.post('http://localhost:51047/api/user/LoginCheck', userdata, config).then(function (successResponse) {
          
           // $scope.isSubmitButtonDisabled = true;
           if(successResponse.data==true)
            $location.path("/adminDashboard");
        else
        	if (successResponse.data==false) {}
        	  $location.path("/userDashboard");
            alert("Login Successfull");
        }, function (errorResponse) {

            $scope.responseMessage = 'Email or Password is incorrect';
        });
    }
       
    
    
});
 
 /* if(($scope.email=="abc@abc.com") && ($scope.password=="abc"))
       
           $location.path("/userDashboard");
       
        else
            alert("Wrong");
    }

        $http.post('/api/Admin_Table/LoginCheck', userdata, config).then(function (successResponse) {
          
           // $scope.isSubmitButtonDisabled = true;
           if(successResponse=='Admin')
            $window.location.href = 'Admin_Dashboard.html'
        else

            alert("Login Successfull");
        }, function (errorResponse) {

            $scope.responseMessage = 'Email or Password is incorrect';
        });
    }*/
    
