import minimongo from "minimongo";

class MemberManager {
  /**
   * Basic function for creating some starting data
   */
  initializeData() {}

  //   addMember(_name, _emailID, _phoneNum, _shippingAddress) {
  //     new Member("Yian", "yian.chen@gmail.com", "9165973444", "1295 Valencia");
  //   }
  /**
   * addMember() that adds members information to database
   */
  addMember(memObj, doneCBK) {
    console.log("adding member to database", memObj);
    let db = new minimongo.IndexedDb({ namespace: "Membersdb" }, function () {
      console.log("member database created");
      db.addCollection("members", function () {
        db.members.upsert(memObj, function (res) {
          console.log("Member Added", res);
          doneCBK(res);
        });
      });
    });
  }

  //   testDB() {
  //     console.log("testing DB");
  //     const IndexedDb = minimongo.IndexedDb;

  //     // Create IndexedDb
  //     let db = new IndexedDb(
  //       { namespace: "Membersdb" },
  //       function () {
  //         // Add a collection to the database
  //         db.addCollection("members", function () {
  //           let doc = {
  //             name: "Benson",
  //             emailID: "benson@gmail.com",
  //             phoneNum: "9165973444",
  //             shippingAddress: "1295 Valencia",
  //           };

  //           // Always use upsert for both inserts and modifies
  //           db.members.upsert(doc, function () {
  //             // Success:

  //             // Query dog (with no query options beyond a selector)
  //             db.members.findOne({ name: "Benson" }, {}, function (res) {
  //               console.log("Member email is: " + res.emailID);
  //             });
  //           });
  //         });
  //       },
  //       function () {
  //         alert("some error!");
  //       }
  //     );
  //   }
}
export default MemberManager;
