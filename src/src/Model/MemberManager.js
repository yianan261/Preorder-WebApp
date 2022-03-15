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


}
export default MemberManager;
