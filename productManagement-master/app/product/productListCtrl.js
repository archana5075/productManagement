/**
 * Created by Archana on 10/17/2014.
 */
(function(){
  "use strict";
    angular
    .module("productManagement")
    .controller("ProductListCtrl",["productResource", ProductListCtrl] );
/* @ngInject */
function ProductListCtrl(productResource) {
    /* jshint validthis: true */
    var vm = this;

    //Retrieve the Products
    productResource.query(function(data){
        vm.products = data;
    });

      vm.showImage = false;

    // Implement the method toggleImage

      vm.toggleImage = function(){
          vm.showImage = !vm.showImage;
      };
  }
}());