'use strict';

app.controller('LoginController', function ($scope) {
    $scope.hello = "he"; 
   $scope.login = function (user) {
       console.log(user);
   };
});