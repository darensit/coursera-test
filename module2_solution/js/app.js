(function () {

    angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.isToBuyListEmpty = false;
        toBuy.toBuyList = ShoppingListCheckOffService.getItemsFromToBuyList();

        toBuy.removeItemFromToBuyList = function(itemIndex) {
            this.toBuyList = ShoppingListCheckOffService.removeItemFromToBuyList(itemIndex, 1);
            if(this.toBuyList.length === 0) {
                this.isToBuyListEmpty = true;
            }
        }
    }

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.alreadyBoughtList = ShoppingListCheckOffService.getItemsFromAlreadyBoughtList();
    }

    function ShoppingListCheckOffService() {
          var shoppingList = this;
          shoppingList.alreadyBoughtItems = [];
          shoppingList.items = [
              {
                  name: "cookies",
                  quantity: 10
              },
              {
                  name: "pencils",
                  quantity: 2
              },
              {
                  name: "apples",
                  quantity: 3
              },
              {
                  name: "deodorant",
                  quantity: 1
              },
              {
                  name: "eggs",
                  quantity: 20
              },
              {
                  name: "chocolates",
                  quantity: 5
              },
              {
                  name: "chips",
                  quantity: 4
              }
          ]

          shoppingList.getItemsFromToBuyList = function() {
              return this.items;
          }

          shoppingList.getItemsFromAlreadyBoughtList = function() {
              return this.alreadyBoughtItems;
          }

          shoppingList.removeItemFromToBuyList = function(item) {
              this.alreadyBoughtItems.push(this.items[item]);
              this.items.splice(item, 1);
              return this.items;
          }
      }

})();
