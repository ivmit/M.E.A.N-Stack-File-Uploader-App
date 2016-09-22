/**
 * Created by imitrach on 9/22/2016.
 */
app.controller('galleryController', ['$scope', '$http', function($scope, $http){

    $scope.superheroes = [];

    $http.get('/superhero')
        .success(function(data){
            console.log(JSON.stringify(data));
            $scope.superheroes = data;
        })
        .error(function(data){
            console.log('Error: ' + data);
        });

}]);