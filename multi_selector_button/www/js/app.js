// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .controller('controller', function ($scope) {

    $scope.list_objs=[
      {
        "name":"A Objs",
        "selected":false,
        "id":0
      },
      {
        "name":"B Objs",
        "selected":false,
        "id":1
      }
      ,
      {
        "name":"C Objs",
        "selected":false,
        "id":2
      }];

    $scope.msb_obj =
    {
      selected: [],
      objs:  $scope.list_objs,
      modalcallback: {},
      title: "title",
      placeholder: "this is a placeholder, tap to add an item",
      prepareDataForModal: function (selected, list) {
        var newdata = [];
        angular.forEach(list, function (value, key) {
          var found = false;
          angular.forEach(selected, function (valueSelected, key)
          {
            if (value.id == valueSelected.id) {
              found = true;
            }
          });
          if (!found)
            newdata.push(value);
        });
        return newdata;
      }
    };


  });


