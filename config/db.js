const con = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    port: "3306",
    user: "root",
    database: "IRCTC",
    password: process.env.DB_PASSWORD,
  });
  
  let workindia = {};
  workindia.saveUser = (data) => {
    return new Promise((resolve, reject) => {
      con.query(
       " insert into user(username, password, email_id, user_id, pin) values (?,?,?,?,?)",
        [
          data.username,
          data.password,
          data.email_id,
          data.user_id,
          data.pin,
        ],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  };
  workindia.login = (data) => {
    return new Promise((resolve, reject) => {
      con.query(
        "select * from user where username=? and password=?",
        [data.username, data.password],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  };

  workindia.saveTrain = (data) => {
    return new Promise((resolve, reject) => {
      con.query(
       " insert into train (train_id,train_name, source, destination, seat_capacity, arrival_time_at_source,arrival_time_at_destination) values (?,?,?,?,?,?,?);",
        [
          data.train_id,
          data.train_name,
          data.source,
          data.destination,
          data.seat_capacity,
          data.arrival_time_at_source,
          data.arrival_time_at_destination,
        ],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  };


  workindia.getTrain = (src ,des) => {
    return new Promise((resolve, reject) => {
      con.query(
        "select train_id,train_name,seat_capacity from train where source=? and destination=?",
        [src,des],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            console.log(result);
            resolve(result);
          }
        }
      );
    });
  };
  module.exports = workindia;