/**
 * Created by imitrach on 9/22/2016.
 */
app.controller('detailController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

    $scope.superhero = {};

    var id = $routeParams.id;
    $http.get('/superhero/' + id)
        .success(function(data){
            console.log(JSON.stringify(data));
            $scope.superhero = data;
        })
        .error(function(data){
            console.log('Error: ' + data);
        });

}]);