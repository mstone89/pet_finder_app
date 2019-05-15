const app = angular.module('PetFinderApp', []);

app.controller('MainController', ['$http', function($http) {
    this.createForm = {};

    this.createPet = () => {
        $http({
            method: 'POST',
            url: '/pets',
            data: this.createForm
        }).then((response) => {
            this.createForm = {};
            console.log(response.data);
        }, (error) => {
            console.log(error);
        });
    }
}]);
