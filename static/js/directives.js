var app = angular.module('directives', []);

app.directive('hello', function() {
    return {
        template: '<h1>Hello, world!</h1>'
    };
});

app.directive('hello2', function() {
    return {
        scope: {
            'subject': '@'
        },
        template: '<h1>Hello, {{subject}}!</h1>'
    };
});

app.directive('hello3', function() {
    return {
        scope: {
            'subject': '@'
        },
        controller: function ($scope){
            if ($scope.subject){
                $scope.name = $scope.subject;
            } else {
                $scope.name = 'world';
            }
        },
        template: '<h1>Hello, {{name}}!</h1>'
    };
});

app.directive('btButton', function() {
    return {
        scope: {
            'type': '@'
        },
        controller: function ($scope){
            if (!$scope.type){
                $scope.type = 'default';
            }
        },
        template: '<button class="btn btn-{{type}}">Click Me</button>'
    };
});

app.directive('formGroup', function() {
    return {
        scope: {
            'field': '@'
        },
        controller: function($scope){
            if ($scope.field.toLowerCase()==='password'){
                $scope.type = 'password';
            } else {
                $scope.type = 'text';
            }
        },
        template: '<label>{{field}}</label><input type="{{type}}" class="form-control" placeholder="{{field}}">'
    };
});

app.directive('toggleButton', function() {
    return {
        scope: {
            'on': '@',
            'off': '@'
        },
        controller: function($scope){
            $scope.state = true;
            $scope.changeState = function(){
                // console.log("Old state: ", $scope.state);
                $scope.state = !$scope.state;
                // console.log("New state: ", $scope.state);
                if ($scope.state){
                    $scope.text = $scope.on;
                    $scope.type = 'success';
                } else {
                    $scope.text = $scope.off;
                    $scope.type = 'default';
                }
            };
            if ($scope.state){
                $scope.text = $scope.on;
                $scope.type = 'success';
            } else {
                $scope.text = $scope.off;
                $scope.type = 'default';
            }
        },
        template: '<button ng-click="changeState()" class="btn btn-{{type}}">{{text}}</button>'
    };
});
