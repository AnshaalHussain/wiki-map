const { Pool } = require("pg");
const dbParams = require("./db.js");
const db = new Pool(dbParams);


const addPoint=  function(point) {
  //point should be an object containing the information
  const { title, description, image, latitude, longitude, map_id, user_id  } = point;
  const sqlQuery = `
  INSERT INTO points
    (title, description, image, latitude, longitude, map_id, user_id)
  VALUES
    ( $1, $2, $3, $4, $5, $6, $7)
  RETURNING *`;

  return db
  .query(sqlQuery, [title, description, image, latitude, longitude, map_id, user_id])
    .then(result => {
      return result.rows[0];
    })
    .catch(err => {
      return null;
    });

}
exports.addPoint = addPoint;

const deletePoint=  function(pointId) {

  const pointVal = pointId; //not sure if this will work in query
  const sqlQuery = `
  DELETE FROM points
    WHERE id = $1`;

  return db
  .query(sqlQuery, pointVal)
    .then(result => {
      //might need result.rows[0]
      //console.log(result.rows[0])
      return result.rows;
    })
    .catch(err => {
      return null;
    });

}
exports.deletePoint = deletePoint;

const editPoint=  function(point) {
  //point should be an object containing the information

  //not changing lat and log because it is at the same spot
  const { title, description, image, id} = point;
  const sqlQuery = `
  UPDATE points
    SET title = $1,
    description = $2,
    image = $3
  WHERE id = $4`;

  return db
  .query(sqlQuery, [title, description, image, id])
    .then(result => {
      //might need result.rows
      return result;
    })
    .catch(err => {
      return null;
    });

}
exports.editPoint = editPoint;



// addFavouriteMap  getFavouriteMap  addContributedMap  getContributedMap  getPointbyMapId  getMap


