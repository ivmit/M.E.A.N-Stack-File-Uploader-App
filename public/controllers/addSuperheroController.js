/**
 * Created by imitrach on 9/22/2016.
 */
app.controller('addSuperHeroController', function($scope, $http, filepickerService){
    
    $scope.superhero = {};
    
    $scope.createSuperhero = function(){
        
        $http.post('/superhero', $scope.superhero)
            .success(function (data) {
                console.log(JSON.stringify(data));
                
                $scope.superhero = {};
                
            }).error(function(data){
                console.log('Error: ' + data);
        });
    };
    
    $scope.upload = function () {

        filepickerService.pick(
            {
                mimetype: 'image/*',
                language: 'en',
                services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                openTo: 'IMAGE_SEARCH'
            },
            function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.superhero.picture = Blob;
                $scope.$apply();
            }
        );
    };

    $scope.uploadMultiple = function(){
        filepickerService.pickMultiple({
            mimetype: 'image/*',
            language: 'en',
            services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
            openTo: 'IMAGE_SEARCH'
        },function(Blob){
            console.log(JSON.stringify(Blob));
            $scope.superhero.morePictures = Blob;
            $scope.$apply();
        });
    };
});