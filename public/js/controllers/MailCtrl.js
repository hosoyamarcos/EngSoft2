/**
 * Created by Hosoya on 05/04/17.
 */
angular.module('MailCtrl', [])
    .controller('MailController',['$scope', '$http', function($scope, $http) {

    var href = 'http://' + window.location.host;

    $scope.sendMail = function () {

        $http({
            method: 'POST',
            url: href + '/mail',
            data: $scope.mail
        }).then(function successCallback(response) {

            if (response.data) {
                swal("Message sent!", "Your message was sent successfully", "success")
                $scope.mail = undefined;
            } else {
                swal("Ops!", "Try it again", "error")
            }


        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('error')

        });

    }

}]);