// import minimongo from "minimongo";

class ShoppingCartManager {
  addItemToCart(_itemName) {}

  get itemsInCart() {
    return [1, 2, 3];
  }

  // testDB() {
  //   console.log("testing DB");
  //   const IndexedDb = minimongo.IndexedDb;

  //   // Create IndexedDb
  //   let db = new IndexedDb(
  //     { namespace: "mydb" },
  //     function () {
  //       // Add a collection to the database
  //       db.addCollection("animals", function () {
  //         let doc = { species: "dog", name: "Bingo" };

  //         // Always use upsert for both inserts and modifies
  //         db.animals.upsert(doc, function () {
  //           // Success:

  //           // Query dog (with no query options beyond a selector)
  //           db.animals.findOne({ species: "dog" }, {}, function (res) {
  //             console.log("Dog's name is: " + res.name);
  //           });
  //         });
  //       });
  //     },
  //     function () {
  //       alert("some error!");
  //     }
  //   );
  // }

  /**
   * addToShopCart method to get the subtotal
   * @param {*} _subtotal, takes a number
   * @returns the first element in the array as the subtotal value
   */
  addToShopCart(_subtotal) {
    let manageSubtotal = [0];
    manageSubtotal[0] += _subtotal;
    // let sumTotal = manageSubtotal.reduce((prev, curr) => prev + curr, 0);
    console.log(manageSubtotal[0]);
    return manageSubtotal[0];
  }
}

export default ShoppingCartManager;
