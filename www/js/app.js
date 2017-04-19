// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
ArrayAlarm = angular.module('ArrayAlarm', ['ionic', 'ngRoute', 'ngSanitize'])


.run(function($ionicPlatform,$rootScope,$location) {
  $rootScope.goHome = function(){
    $location.path('/list')
  }; 
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


/****************************************************************************************************************/
/*************************************************ROUTES**********************************************************/
/****************************************************************************************************************/

ArrayAlarm.config(['$routeProvider', function($routeProvider){
$routeProvider
  .when('/home',{controller:'HomeController', templateUrl:'partials/home.html'})
  .when('/list',{controller: 'ListController', templateUrl:'partials/list.html'})
  .when('/stats',{controller: 'StatsController', templateUrl:'partials/stats.html'})
  .when('/add',{controller: 'AddController', templateUrl:'partials/add.html'})
  .when('/wake',{controller: 'WakeController', templateUrl:'partials/wake.html'})
  .when('/wake2',{controller: 'WakeController', templateUrl:'partials/wake2.html'})
  .when('/wake3',{controller: 'WakeController', templateUrl:'partials/wake3.html'})
  .when('/wake4',{controller: 'WakeController', templateUrl:'partials/wake4.html'})
  .when('/wake5',{controller: 'WakeController', templateUrl:'partials/wake5.html'})
  .when('/edit/:alarmId',{controller: 'DetailsController', templateUrl:'partials/edit.html'})
  .when('/settings',{controller: 'SettingsController', templateUrl:'partials/settings.html'})
  .when('/landing',{templateUrl:'partials/landing.html'})
  /*note that the landing page i implemented was just a manual route to have on screen industry night for when i
  am not demo-ing my app. I know i could have put it in as a loading screen but thought that having a timed loading
  screen wouldnt work as well as having just a manual route that i can have sitting there untill i begin a demo. */
  .otherwise({redirectTo: '/home'});
}]);





/****************************************************************************************************************/
/**************************************** HOME CONTROLLER ********************************************************/
/****************************************************************************************************************/

ArrayAlarm.controller('HomeController', ['$scope','$rootScope','$location','$route','$window', '$timeout', function($scope,$rootScope,$location,$route,$window,$timeout){

/*********************** GET TIME FUNCTION BEGINS**************************/
  function getTime(){
  var clockDiv = document.querySelector("#clock");

/************** GET NOW TIME *****************/

var hourSetting = JSON.parse(localStorage.getItem("Settings"));
                  console.log(hourSetting);

  var time = new Date();
      var h = time.getHours();
      var m = time.getMinutes();
      var s = time.getSeconds();
        m = ( m < 10 ? "0" : "" ) + m;
  var AMPM = h >= 12 ? 'PM' : 'AM';
        h = ( h > 12 ) ? h - 12 : h;
/***********************************/
                if (hourSetting === true){
                  if(AMPM == "PM" && h < 12) h = h + 12;
                  if(AMPM == "AM" && h == 12) h = h - 12;
                };
/***********************************/


  var timeString = h + ":" + m + AMPM;
  clockDiv.innerHTML = timeString;

/************** GET ALARM TIME(S) *****************/

alarms = JSON.parse(localStorage.getItem('Alarms'));
//console.log(myAlarms[0].Times[0].Hour);
/****************************************************/  

for (i = 0; i < alarms.length; i++)   {
    if(alarms[i].Status === true){
/****************************************************/  
function getPostition(){
    if(alarms[i].Id === alarms[i].Id){
         var index = i;
         //console.log(i);
         return i;
      }
  };
/****************************************************/  
      var p = getPostition(); 
      var position = p;
      //console.log(alarms[i].Name+" position is "+position);
/****************************************************/  
        for (j = 0; j < alarms[i].Times.length; j++){
/****************************************************/ 
        function timePostition(){
        if(alarms[i].Times[j].Id === alarms[i].Times[j].Id){
         var index = j;
         //console.log(j);
         return j;
        }
        };
/****************************************************/  
      var x = timePostition(); 
/****************************************************/ 
        var myAlarms = alarms[i];
        var active = myAlarms.Times[j];

        var ah = active.Hour;
        var am = ( active.Min < 10 ? "0" : "" ) + active.Min;
        var aAMPM = active.AMPM;
/****************************************************/  
        if (hourSetting === true){
        if(aAMPM == "PM" && ah < 12) ah = ah + 12;
        if(aAMPM == "AM" && ah == 12) ah = ah - 12;
        };
/****************************************************/  
        var alarmString = [];
 
        alarmString = ah + ":" + am + aAMPM + active.Triggered;
        var matchString = h + ":" + m + AMPM + false;


        console.log("comparing "+matchString+" to "+alarmString);

        if (alarmString === matchString) {
        //if (alarmString === alarms[i].Times[j].Hour + ":" + alarms[i].Times[j].Min + alarms[i].Times[j].AMPM + false){
            var position1 = i;
            console.log(position1);
            var position2 = j;
            console.log(position2);
        
        alarms[i].Times[j].Triggered = true;
        alarms[i].Count++;
        localStorage.setItem("Alarms", JSON.stringify(alarms));

/************************* different view function for each position ***************************/  
        if(position2 === 0){
        playAlarm();
        };

        if(position2 === 1){
        playAlarm2();
        };

        if(position2 === 2){
        playAlarm3();
        };

        if(position2 === 3){
        playAlarm4();
        };

        if(position2 === 4){
        playAlarm5();
        };
/***********************************************/
       // }
        };
       };

    };

};

$timeout(getTime, 60000);

};

/*********************** GET TIME FUNCTION ENDS **************************/
getTime();


function playAlarm(){

  $rootScope.wakeScreen = function(){
  $location.path('/wake');
    };
   console.log("alarm fired!!!!");
  $rootScope.wakeScreen();
    };

function playAlarm2(){
  $rootScope.wakeScreen2 = function(){
  $location.path('/wake2');
    };
   console.log("alarm fired!!!!");
  $rootScope.wakeScreen2();
    };

function playAlarm3(){
  $rootScope.wakeScreen3 = function(){
  $location.path('/wake3');
    };
   console.log("alarm fired!!!!");
  $rootScope.wakeScreen3();
    };

function playAlarm4(){
  $rootScope.wakeScreen4 = function(){
  $location.path('/wake4');
    };
   console.log("alarm fired!!!!");
  $rootScope.wakeScreen4();
    };

function playAlarm5(){
  $rootScope.wakeScreen5 = function(){
  $location.path('/wake5');
    };
   console.log("alarm fired!!!!");
  $rootScope.wakeScreen5();
    };



}]);


/****************************************************************************************************************/
/**************************************** LIST CONTROLLER ********************************************************/
/****************************************************************************************************************/


ArrayAlarm.controller('ListController', ['$scope','$location','$routeParams','$window', function($scope, $location, $routeParams, $window){

var alarms = JSON.parse(localStorage.getItem("Alarms"));
$scope.myAlarms = JSON.parse(localStorage.getItem('Alarms'));
console.log($scope.myAlarms);
/****************************************************/
// changes on of status via toggle (always bugs the first toggle change but works after that?)
/****************************************************/  
    $scope.toggleStatus = function($event, alarmChange){

        var target = $event.currentTarget.id;

        for (i = 0; i < alarms.length; i++)   {
        if (target === alarms[i].Id){
        var slot = i;

        alarms[slot].Status = alarmChange;
        console.log(alarms[slot].Status);
  
        localStorage.setItem("Alarms", JSON.stringify(alarms));
        console.log('Status saved');
    }
    }
    };
/****************************************************/  

/****************************************************/  
// this cycles through the alarms & if all the triggered values in an alarm are set to true - it sets the alarm status
// and toggle value to false - since it just went off with all its times. it also resets the triggered value back to
// false so that if/when the alarm status is reactivated with the toggle - all the times are set to go off again.
// ** reload is there for toggles to reset to new values (if applicable)
/****************************************************/  

    function checkArray(){
    for (k = 0; k < alarms.length; k++)   {
    for (j = 0; j < alarms[k].Times.length; j++){ 
      if(alarms[k].Times[j].Triggered === true){
        var position1 = k;
        var position2 = j;

      alarms[position1].Times[position2].Triggered = false;
            alarms[position1].Status = false;
      localStorage.setItem("Alarms", JSON.stringify(alarms));
      console.log("updated");
      $window.location.reload();
    } else {
    console.log("no update needed");
    }
  };
};
};
/****************************************************/   
    checkArray();
}]);

/****************************************************************************************************************/
/**************************************** ADD CONTROLLER ********************************************************/
/****************************************************************************************************************/

ArrayAlarm.controller('AddController', ['$scope','$rootScope','$location', function($scope,$rootScope, $location){


/*******************************************************************/  
//wake times get saved temporarily into session storage then pushed into the final alarm in the save function.
//waketimes are all wiped after an alarm is saved so that you can start fresh the next time
/*******************************************************************/ 

$scope.addTime = function(time){

  //$scope.addHour = '';
  //$scope.addMin = '';
    if ($scope.addHour == null) {alert('Hour value missing'); return false;}
    if ($scope.addMin == null) {alert('Minute value missing'); return false;}
    if ($scope.addHour > 12) {alert('Invalid hour value'); return false;}
    if ($scope.addHour == 0) {alert('Invalid hour value'); return false;}
    if ($scope.addMin > 59) {alert('Invalid minute value'); return false;}
    if ($scope.addMin == 0) {alert('Invalid minute value'); return false;}
    $scope.addMin = ( $scope.addMin < 10 ? "0" : "" ) + $scope.addMin;

  $scope.WakeTimes = [];
  $scope.WakeTimes = {'Id':wId(),'Hour':$scope.addHour,'Min':$scope.addMin,'AMPM':$scope.time.ampm,'Triggered':false};      

  $scope.allTimes = JSON.parse(sessionStorage.getItem("allTimes")) || [];
  $scope.allTimes.push($scope.WakeTimes);

  console.log(JSON.parse(sessionStorage.getItem("allTimes")));

  sessionStorage.setItem('allTimes', JSON.stringify($scope.allTimes));
 $scope.WakeTimes = JSON.parse(sessionStorage.getItem("allTimes"));
console.log($scope.WakeTimes);

/*******************************************************************/ 
// remove time when it is clicked on 
/*******************************************************************/ 
     $scope.removeTime = function($event) {
      var target = $event.currentTarget.id;
        console.log(target);
      for (y = 0; y < $scope.WakeTimes.length; y++){
       if($scope.WakeTimes[y].Id === target){
         var index = y;
         console.log(y);
         $scope.WakeTimes.splice(y, 1);   
        sessionStorage.setItem("allTimes",JSON.stringify($scope.WakeTimes));
        console.log("time was removed!!")
  };
}; 
};

/****************************************************/  
//end of addTime function
};
/****************************************************/  

/*******************************************************************/ 
// functions to add unique IDs
/*******************************************************************/ 
    var wCount = localStorage.getItem('wCount', wCount) || 0;
    function wId() {
       wCount++;
       console.log(wCount);
       localStorage.setItem("wCount", wCount);
       return localStorage.getItem("wCount", wCount);
    };

    var idCount = localStorage.getItem('idCount', idCount) || 0;
    function getId() {
       idCount++;
       console.log(idCount);
       localStorage.setItem("idCount", idCount);
       return localStorage.getItem("idCount", idCount);
    };

/*******************************************************************/ 
// saving the alarm
/*******************************************************************/ 
    $scope.addAlarm = function(time){

      $scope.newAlarm = [];

    var wakeTimes = JSON.parse(sessionStorage.getItem("allTimes"));
    if ($scope.addName == null) {alert('Please enter a name'); return false;}
    $scope.newAlarm = ({'Id':getId(),'Name':$scope.addName,'Times':wakeTimes,'Status':true,'Count':0});
    //$scope.addName = '';
    $scope.Alarms = JSON.parse(localStorage.getItem("Alarms")) || [];
     
    $scope.Alarms.push($scope.newAlarm);

    //console.log($scope.time.ampm);
    console.log($scope.newAlarm);  

    localStorage.setItem('Alarms', JSON.stringify($scope.Alarms));
    sessionStorage.removeItem('allTimes');
    console.log('old wake times wiped');

    $rootScope.goList = function(){
    $location.path('/list')
    }; 
    $rootScope.goList();
    };

/*******************************************************************/ 
// on cancel
/*******************************************************************/ 
     $scope.cancel = function(){
        sessionStorage.removeItem('allTimes');
        console.log('old wake times wiped');
     };
 /****************************************************/

}]);

/****************************************************************************************************************/
/**************************************** EDIT CONTROLLER ********************************************************/
/****************************************************************************************************************/

ArrayAlarm.controller('DetailsController', function($scope, $routeParams, $rootScope, $location){

$scope.getAlarms = JSON.parse(localStorage.getItem('Alarms'));
console.log($scope.getAlarms);
var id = $routeParams.alarmId;
console.log(id);
/*******************************************************************/ 
// getting the position in the array
/*******************************************************************/ 
function getPostition(){
      for (i = 0; i < $scope.getAlarms.length; i++){
       if($scope.getAlarms[i].Id === id){
         var index = i;
         console.log(i);
         return i;
}}};
var p = getPostition();
//console.log(getPostition());
$scope.details = $scope.getAlarms[p];
console.log($scope.details);
$scope.oldTimes = $scope.getAlarms[p].Times;


/*******************************************************************/ 
// on cancel
/*******************************************************************/ 
$scope.cancel = function(){
        sessionStorage.removeItem('allTimes');
        console.log('old wake times wiped');
     };

/*******************************************************************/ 
// function for unique IDs
/*******************************************************************/ 

    var wCount = localStorage.getItem('wCount', wCount) || 0;
    function wId() {
       wCount++;
       console.log(wCount);
       localStorage.setItem("wCount", wCount);
       return localStorage.getItem("wCount", wCount);
    };

/*******************************************************************/ 
// adding times
/*******************************************************************/ 

$scope.addTime = function(time){

if ($scope.addHour == null) {alert('Hour value missing'); return false;}
    if ($scope.addMin == null) {alert('Minute value missing'); return false;}
    if ($scope.addHour > 12) {alert('Invalid hour value'); return false;}
    if ($scope.addHour == 0) {alert('Invalid hour value'); return false;}
    if ($scope.addMin > 59) {alert('Invalid minute value'); return false;}
    if ($scope.addMin == 0) {alert('Invalid minute value'); return false;}

  $scope.oldTimes = $scope.getAlarms[p].Times;
  $scope.WakeTimes = [];
  $scope.addMin = ( $scope.addMin < 10 ? "0" : "" ) + $scope.addMin;
  $scope.WakeTimes = {'Id':wId(),'Hour':$scope.addHour,'Min':$scope.addMin,'AMPM':$scope.time.ampm,'Triggered':false};

    var wakeIdCount = localStorage.getItem('wakeIdCount', wakeIdCount) || 0;
    function getWakeId() {
       wakeIdCount++;
       console.log(wakeIdCount);
       localStorage.setItem("wakeIdCount", wakeIdCount);
       return localStorage.getItem("wakeIdCount", wakeIdCount);
    };

  $scope.allTimes = JSON.parse(sessionStorage.getItem("allTimes")) || [];
  $scope.oldTimes.push($scope.WakeTimes);
  sessionStorage.setItem('allTimes', JSON.stringify($scope.oldTimes));
  //localStorage.setItem('Alarms', JSON.stringify($scope.oldTimes));
  $scope.WakeTimes = JSON.parse(sessionStorage.getItem("allTimes"))+$scope.getAlarms[p];
};

/*******************************************************************/ 
// removing times on click
/*******************************************************************/ 
     $scope.removeTime = function($event) {
      var target = $event.currentTarget.id;

       console.log(target);
         for (y = 0; y < $scope.details.Times.length; y++){
       if($scope.details.Times[y].Id === target){
         var index = y;
         console.log(y);
         $scope.details.Times.splice(y, 1);   
        sessionStorage.setItem("allTimes",JSON.stringify($scope.details.Times));
        console.log("time was removed!!")
  }
}; 

};
/*******************************************************************/ 
// saving the alarm
/*******************************************************************/ 

$scope.saveAlarm = function(time){
  var wakeTimes = JSON.parse(sessionStorage.getItem("allTimes"));
        $scope.getAlarms[p].Name = $scope.addName || $scope.getAlarms[p].Name;
        $scope.getAlarms[p].Times = wakeTimes || $scope.getAlarms[p].Times;


      localStorage.setItem("Alarms", JSON.stringify($scope.getAlarms));
    sessionStorage.removeItem('allTimes');
    console.log('old wake times wiped');

        $rootScope.goList = function(){
    $location.path('/list')
    }; 
    $rootScope.goList();
};
/*******************************************************************/ 
// deleting the alarm
/*******************************************************************/ 

$scope.deleteAlarm = function(){
  if (confirm('Are you sure you want to delete this alarm?')) {
    console.log(p);
    $scope.getAlarms.splice(p, 1);
    localStorage.setItem("Alarms", JSON.stringify($scope.getAlarms));
    console.log("this alarm was deleted");
} else {
   return false;
}
};

/****************************************************/

});


/****************************************************************************************************************/
/**************************************** WAKE CONTROLLER ********************************************************/
/****************************************************************************************************************/

ArrayAlarm.controller('WakeController', ['$scope', function($scope, $cordovaDeviceMotion, $ionicPlatform){

/*******************************************************************/ 
// get time function begins
/*******************************************************************/ 
  function getTime(){
  var clockDiv = document.querySelector("#clock");

/*******************************************************************/ 
// getting current time
/*******************************************************************/ 
  var time = new Date();
      var h = time.getHours();
      var m = time.getMinutes();
        m = ( m < 10 ? "0" : "" ) + m;
 var AMPM = h >= 12 ? 'PM' : 'AM';
        h = ( h > 12 ) ? h - 12 : h;
  var timeString = h + ":" + m + AMPM;

  clockDiv.innerHTML = timeString;


/*******************************************************************/ 
// getting the alarm times
/*******************************************************************/ 
alarms = JSON.parse(localStorage.getItem('Alarms'));
  //console.log(myAlarms[0].Times[0].Hour);

  for (i = 0; i < alarms.length; i++){
  for (j = 0; j < alarms[i].Times.length; j++) {

      var ah = alarms[i].Times[j].Hour;
      var am = alarms[i].Times[j].Min;
      var aAMPM = alarms[i].Times[j].AMPM;
      var alarmString = ah + ":" + am + aAMPM;
      var compare = alarms[i].Times[j].Hour + ":" + alarms[i].Times[j].Min + alarms[i].Times[j].AMPM;
  if (alarmString === compare){
    //  console.log(alarms[i].Name);
    };
  };
};

  setTimeout(getTime, 1000);

};

/*********************** GET TIME FUNCTION DONE **************************/

getTime();

/*******************************************************************/ 
// audio playing & stops on snooze click
/*******************************************************************/
var audio = new Audio('sounds/marimba.mp3');
audio.loop=true;
audio.play();


$scope.stop = function(){
  audio.pause();
  console.log("sudio should be stopped");
};


}]);


/****************************************************************************************************************/
/**************************************** SETTINGS CONTROLLER ********************************************************/
/****************************************************************************************************************/

ArrayAlarm.controller('SettingsController', ['$scope', function($scope){

/*******************************************************************/ 
// saving the alarm
/*******************************************************************/ 
$scope.hourSaved = JSON.parse(localStorage.getItem('Settings'));

      $scope.toggleHour = function(hourSetting){
        console.log(hourSetting);
        localStorage.setItem("Settings", hourSetting);
        console.log('Status saved');
        changeData();
    };

/*******************************************************************/ 
// function to change all data from 12 hour to 24 hour - currently still buggy
/*******************************************************************/ 
function changeData(){
  var hourSaved = JSON.parse(localStorage.getItem('Settings'));
  console.log(hourSaved);
  var alarms = JSON.parse(localStorage.getItem('Alarms'));

   var time = new Date();
      var h = time.getHours();
      var m = time.getMinutes();
      var s = time.getSeconds();
        m = ( m < 10 ? "0" : "" ) + m;
        h = ( h > 12 ) ? h - 12 : h;
      var AMPM = ( h < 12 ) ? "AM" : "PM";
  var timeString = h + ":" + m + AMPM;

for (i = 0; i < alarms.length; i++)   {
    if(hourSaved = true){
      for (j = 0; j < alarms[i].Times.length; j++)   {
        console.log(alarms[i].Times[j].Hour);
        if(alarms[i].Times[j].AMPM == "PM" && h < 12) alarms[i].Times[j].Hour = alarms[i].Times[j].Hour + 12;
        if(alarms[i].Times[j].AMPM == "AM" && h == 12) alarms[i].Times[j].Hour = h - 12;
        localStorage.setItem("Alarms", JSON.stringify(alarms));
  };
};
};

for (i = 0; i < alarms.length; i++)   {
    if(hourSaved = false){
      for (j = 0; j < alarms[i].Times.length; j++)   {
        console.log(alarms[i].Times[j].Hour);
        if(alarms[i].Times[j].AMPM == "PM" && h < 12) alarms[i].Times[j].Hour = alarms[i].Times[j].Hour - 12;
        if(alarms[i].Times[j].AMPM == "AM" && h == 12) alarms[i].Times[j].Hour = h + 12;
        localStorage.setItem("Alarms", JSON.stringify(alarms));
  };
};
};
};

/*******************************************************************/ 
// clearing stats page
/*******************************************************************/ 
alarms = JSON.parse(localStorage.getItem('Alarms'));
  
  $scope.clearStats = function(){
    if (confirm('Are you sure you want to clear stats? This can not be undone.')) {
    for (i = 0; i < alarms.length; i++){
      alarms[i].Count = 0;
    };
    localStorage.setItem("Alarms", JSON.stringify(alarms));
    } else {
   return false;
}
  };

}]);


/****************************************************************************************************************/
/**************************************** STATS CONTROLLER ********************************************************/
/****************************************************************************************************************/

ArrayAlarm.controller('StatsController', ['$scope', function($scope){

  alarms = JSON.parse(localStorage.getItem("Alarms"));

/*******************************************************************/ 
// get avg hour
/*******************************************************************/ 
      var hSum = 0;
      var countVar = 0;
  for (i = 0; i < alarms.length; i++){
    for (j = 0; j < alarms[i].Times.length; j++){
      var values;
      if(alarms[i].Times[j].AMPM === "PM"){
        alarms[i].Times[j].Hour = alarms[i].Times[j].Hour + 12;
        console.log(alarms[i].Times[j].Hour);      
      };

    hSum += parseInt(alarms[i].Times[j].Hour);
    countVar++;
    };
  };
console.log(countVar);
    var hAvg = Math.round(hSum / countVar);

/*******************************************************************/ 
// get avg min
/*******************************************************************/ 
      var mSum = 0;
  for (i = 0; i < alarms.length; i++){
    for (j = 0; j < alarms[i].Times.length; j++){
      mSum += parseInt(alarms[i].Times[j].Min);
      console.log(mSum);
    };
        var mAvg = Math.floor(mSum / countVar);
  };

/*******************************************************************/ 
// get ampm
/*******************************************************************/ 

  var avgAMPM = (hAvg > 12) ? 'PM' : 'AM';

/*******************************************************************/ 
// build string
/*******************************************************************/ 

  if(hAvg > 12){
      hAvg = hAvg - 12;
    };
  var hourSetting = JSON.parse(localStorage.getItem("Settings"));
  if (hourSetting === true){
                  if(avgAMPM == "PM" && hAvg < 12) hAvg = hAvg + 12;
                  if(avgAMPM == "AM" && hAvg == 12) hAvg = hAvg - 12;
                };
  avgTime = hAvg+":"+mAvg+avgAMPM;
  console.log("average time is "+avgTime);

/*******************************************************************/ 
// get the average # of alarms per group
/*******************************************************************/ 
  aSum = 0;
  for (i = 0; i < alarms.length; i++){
            var aCount = alarms[i].Times.length;
              aSum += parseInt(aCount);
  };
  var aAvg = aSum / alarms.length;
  var roundedAvg = Math.round( aAvg * 10 ) / 10;

/*******************************************************************/ 
// getting the most used alarm
/*******************************************************************/ 

var mostUsed = 0;
  for (i = 0; i < alarms.length; i++){
  if (alarms[i].Count > mostUsed) {
      mostUsed = alarms[i].Count;
      console.log(mostUsed);
      var position1 = i;
      console.log(position1);
      var mostUsedName = alarms[position1].Name;
  };
};

/*******************************************************************/ 
// get the total number
/*******************************************************************/ 
var alarmSum = 0;
for (i = 0; i < alarms.length; i++){
alarmSum += parseInt(alarms[i].Count);
};
console.log(alarmSum);

/*******************************************************************/ 
// build the scope
/*******************************************************************/ 

  $scope.stats = [
    {"Name":"Average Alarm Time","Value":avgTime},
    {"Name":"Average Number Set Per Group","Value":roundedAvg+" Alarms"},
    {"Name":"Most Used Alarm","Value":mostUsedName},
    {"Name":"Total Alarms Used","Value":alarmSum}
];
  localStorage.setItem("Stats", JSON.stringify($scope.stats));
  console.log(JSON.parse(localStorage.getItem("Stats")));

}]);







