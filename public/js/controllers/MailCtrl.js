/**
 * Created by Hosoya on 05/04/17.
 */
angular.module('MailCtrl', []).controller('MailController', function($scope) {

    $scope.sendMail = function () {
        console.log($scope.mail)

        $http({
            method: 'POST',
            url: '/',
            data: $scope.mail
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available


        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.


        });

    }

});