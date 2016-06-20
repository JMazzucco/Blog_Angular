// let's define the scotch controller that we call up in the about state

app.controller('aboutController', ['$scope', '$window', function aboutController($scope, $window) {

    $scope.message = 'test';


    $scope.greeting = 'Welcome!';

    $scope.doGreeting = function(greeting) {
        $window.alert(greeting);
    };

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

}]);

