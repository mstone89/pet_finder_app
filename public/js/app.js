const app = angular.module('PetFinderApp', []);

app.controller('MainController', ['$http', function($http) {
// const controller = this;
    this.createForm = {};

    this.createPet = () => {
        $http({
            method: 'POST',
            url: '/pets',
            data: this.createForm
        }).then((response) => {
          this.pets.push(response.data);
            this.createForm = {};
            console.log(response.data);
        }, (error) => {
            console.log(error);
        });
    }
    this.getPets = () => {
      $http({
        method: 'GET',
        url: '/pets'
      }).then((response) => {
          this.pets = response.data;
          console.log(response.data);
      }, (error) => {
          console.log(error);
      });
    }
    this.getPets();
}]);
