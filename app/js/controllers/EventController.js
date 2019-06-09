// 'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $routeParams, $route) {

        // $scope.snippet ='<span style="color:red">Hi there!</span>';
        // $scope.boolValue = false;
        // $scope.buttonDisabled = true;
        $scope.sortorder = 'name';
        $scope.event = eventData.getEvent($routeParams.eventId);
            // .success(function(event){$scope.event = event;})
            // .error(function(data, status, headers, config){
            //     $log.warn(data, status, headers, config);
            
            // });
        $scope.reload = function(){
            $route.reload();
        };
 
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        // $scope.scrollToSession = function() {
        //     $anchorScroll();
        // }
    }
);