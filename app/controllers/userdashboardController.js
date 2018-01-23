app.controller('userdashboardController', ['$scope', '$http', 'uiCalendarConfig', function($scope, $http, $location, $rootScope, uiCalendarConfig){
    
    //Get all events
    
    
    $scope.pageChange = function(eventid){
        $location.path("/eventDetails/"+eventid);   
    }
    
    
    //calendar calls
    
    $scope.SelectedEvent = null;
    var isFirstTime = true;
    
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    
    $scope.events = [
        {
            title:'nodeJS',
            start: new Date(2018, 0, 23),
 
        },
        {
            title:'Machine Learning',
            start: new Date(2018, 0, 30),
 
        }
    ];
    $scope.eventSources = [$scope.events];
    
    //Load events from the server
     $http.get('http://localhost:51047/api/event/GetAllEvents')
            .then(function successCallback(response) {
             $scope.rows = response.data;
                
            console.log($scope.rows[0].ename); 
         $scope.events.push({
             title: $scope.rows[0].ename,
             start: $scope.rows[0].edate
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
            },
            eventAfterAllRender: function(){
                
            }
        }
    }
    
    

}]);