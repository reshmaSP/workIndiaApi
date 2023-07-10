const db = require("../config/db");
require("../config/global");
let user_id=10000;
async function saveUser(data) {
  try {
    data["user_id"] = user_id.toString();
    user_id += 1;
    let pin = Math.floor(1000 + Math.random() * 9000);
    data["pin"] = crypto
      .createHmac("sha256", salt)
      .update(pin.toString())
      .digest("hex");
    let results = await db.saveUser(data);
    return {
      status_code: 201,
      status: "Account created successfully",
      json_data: {
        user_id: data.user_id,
      },
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
async function login(data) {
  try {
    // console.log(data.pin);
    // data.pin = crypto.createHmac("sha256", salt).update(data.pin).digest("hex");
    let pin = Math.floor(1000 + Math.random() * 9000);
    data["pin"] = crypto
      .createHmac("sha256", salt)
      .update(pin.toString())
      .digest("hex");
    let results = await db.login(data);
    if (results.length == 0) {
      return {
        status: "Incorrect username or password. Please Retry.",
        status_code: 401,
      };
    }
    return {
      status: "Login Succesful",
      status_code: 200,
      username: data.user_id,
      access_token:data["pin"]

    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

async function getTrain(src,des) {
  try {
    let results = await db.getTrain(src,des);
    if (results.length == 0) {
      return {
        status: "Failed to fetch balance.",
        status_code: 400,
      };
    }
    return {
      status: "Success",
      status_code: 200,
      data: {

      },
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}


module.exports = { saveUser,login ,getTrain};
