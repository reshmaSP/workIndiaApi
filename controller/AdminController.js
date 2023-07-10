const db = require("../config/db");
require("../config/global");

let train_id=4745788;
async function saveTrain(data) {
    try {
      data["train_id"] = train_id.toString();
      train_id +=1;
    //   let pin = Math.floor(1000 + Math.random() * 9000);
    
      let results = await db.saveTrain(data);
      return {
        status_code: 201,
        status: "Train Added successfully",
        json_data: {
          train_id: data.train_id,
        },
      };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  module.exports={saveTrain};