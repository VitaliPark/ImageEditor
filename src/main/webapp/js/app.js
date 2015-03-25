var app = angular.module('imageEditor', ['ui.router', 'flow']);


app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/anaglyph');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/pages/main.html',
            controller: 'AppController',
            controllerAs: 'application'
        })
        .state('anaglyph', {
            url: '/anaglyph',
            templateUrl: '/pages/anaglyph.html',
            controller: 'AnaglyphController',
            controllerAs: 'anaglyph'
        })
        .state('filter', {
            url: '/filter',
            templateUrl: '/pages/filter.html',
            controller: 'FilterController',
            controllerAs: 'filter'
        })
});

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.service('fileUpload', ['$http', function ($http) {

    this.uploadFileToUrl = function(leftImage, rightImage, uploadUrl){
        var fd = new FormData();
        fd.append('leftImage', leftImage);
        fd.append('rightImage', rightImage);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function(){
            })
            .error(function(){
            });
    }
}]);


