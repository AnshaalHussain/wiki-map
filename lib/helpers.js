const { Pool } = require("pg");
const dbParams = require("./db.js");
const db = new Pool(dbParams);


const getUserWithEmail = function(email) {
  const sqlQuery =`
  SELECT *
  FROM users
  WHERE email = $1`;
  const values = [email];

  return db
    .query(sqlQuery, values)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => {
      return null;
    });
}
exports.getUserWithEmail = getUserWithEmail;

const getUserWithId = function(id) {
  const sqlQuery =`
  SELECT *
  FROM users
  WHERE id = $1`;
  const values = [id];

  return db
    .query(sqlQuery, values)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => {
      return null;
    });

}
exports.getUserWithId = getUserWithId;

const createNewUser =  function(user) {

  const { name, email, password } = user;
  const sqlQuery = `
  INSERT INTO users
    (name, email, password)
  VALUES
    ( $1, $2, $3)
  RETURNING *`;

  return db
  .query(sqlQuery, [name, email, password])
    .then(result => {
      return result.rows[0];
    })
    .catch(err => {
      return null;
    });

}
exports.createNewUser = createNewUser;


const createNewMap=  function(user) {

  const { title, description } = user;
  const sqlQuery = `
  INSERT INTO maps
    (title, description)
  VALUES
    ( $1, $2)
  RETURNING *`;

  return db
  .query(sqlQuery, [title, description])
    .then(result => {
      return result.rows[0];
    })
    .catch(err => {
      return null;
    });

}
exports.createNewMap = createNewMap;

// addFavouriteMap  getFavouriteMap  addContributedMap  getContributedMap
// addPoints getPointsbyMap  ge
