// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
.controller('instagram',function($scope)
{
  console.log("Instagram Controller Running")
  $scope.login=function()
    {
        console.log("Login Clicked!")
        console.log("Email = "+$scope.myForm.mail+" and Password = "+$scope.myForm.password);
    };
    $scope.forgot=function()
    {
      console.log("Forgot anchor clicked")
    }
    $scope.siginHelp=function()
    {
      console.log("sigin Help Clicked!")
    }
    $scope.fb=function()
    {
      console.log("Continue with facebook")
    }
});