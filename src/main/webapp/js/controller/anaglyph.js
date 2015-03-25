/**
 * Created by vitaly.pak on 20.03.2015.
 */
app.controller('AnaglyphController', function ($scope, fileUpload) {
    $scope.left = {};
    $scope.right = {};

    this.message = "Hello world";

    $scope.uploadFile = function(){
        var leftImage = $scope.leftImage;
        var rightImage = $scope.rightImage;
        console.log('file is ' + JSON.stringify(leftImage));
        var uploadUrl = "/anaglyph/create-anaglyph";
        fileUpload.uploadFileToUrl(leftImage, rightImage, uploadUrl);
    };

});