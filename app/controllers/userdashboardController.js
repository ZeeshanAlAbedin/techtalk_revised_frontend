app.controller('userdashboardController', ['$scope', '$http', 'uiCalendarConfig', '$location', function($scope, $http, $rootScope, $location, uiCalendarConfig ){
    
    //Get all events
    
    
    $scope.pageChange = function(eventid){
        console.log(eventid);
        $location.path("/eventDetails/"+eventid);   
    }
    
    var todaysDate = moment(new Date()).format('YYYY MM DD');
    //calendar calls
    
    $scope.SelectedEvent = null;
    var isFirstTime = true;
    
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    
    $scope.events = [];
    
    $scope.eventSources = [$scope.events];
    
    //Load events from the server
     $http.get('http://localhost:51047/api/event/GetAllEvents')
            .then(function successCallback(response) {
             $scope.rows = response.data;
                
            console.log($scope.rows[0].ename); 
        angular.forEach($scope.rows, function(value){
           //console.log('title :' + value.ename); 
           //console.log('start :' + value.edate); 
            $scope.events.push({
             
                title : value.ename,
                start : value.edate,
                description : value.edes,
                evid : value.eventid,
                stick: true
            
         })
        })
       }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
    
    
    //Configure Calendar
    $scope.uiConfig = {
        calendar: {
            height: 450,
            editable: false,
            displayEventTime: false,
            header: {
                left: 'month',
                center: 'title',
                right: 'today prev, next'
            },
            eventClick: function(event){
                $scope.SelectedEvent = event;
                $scope.pageChange($scope.SelectedEvent.evid);
                
            },
            eventAfterAllRender: function(){
                
            }
        }
    }
    
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
    
    
    

}]);