'use strict';

app.controller('LoginController', function ($scope) {
   $scope.login = function (user) {
       console.log(user);
   };
});