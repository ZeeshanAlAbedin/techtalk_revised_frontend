app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl : "../views/home.html",
        controller : "indexController"
        })
        .when("/userDashboard", {
            templateUrl : "../views/userdashboard.html",
            controller : "userdashboardController"
        })
        .when("/adminDashboard", {
           templateUrl : "../views/admindashboard.html",
            controller : "userdashboardController"
        })
        .when("/addUser", {
           templateUrl : "../views/addUser.html",
            controller : "adduserController"
        })
        .when("/addEvent", {
           templateUrl : "../views/addEvent.html",
            controller : "addeventController"
        })
        .when("/eventDetails/:id", {
           templateUrl : "../views/eventDetails.html",
            controller : "eventdetailsController"
        })
        .when("/removeEvent", {
           templateUrl : "../views/removeEvent.html",
            controller : "removeeventController"
        })
        .when("/updateEvent", {
           templateUrl : "../views/updateEvent.html",
            controller : "updateeventController"
        })
        .when("/uploadppt", {
           templateUrl : "../views/addPPT.html",
            controller : "addpptController"
        });
});