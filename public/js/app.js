const app = angular.module('PetFinderApp', []);

app.controller('MainController', ['$http', function($http) {
// const controller = this;
    this.createForm = {};

    this.deletePet = (id) => {
        $http({
            method: 'DELETE',
            url: '/pets/' + id
        }).then((response) => {
            const removeByIndex = this.pets.findIndex((pet) => {
                pet._id === id
            });
            this.pets.splice(removeByIndex, 1);
            console.log(response.data);
        }, (error) => {
            console.log(error);
        });
    }

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
