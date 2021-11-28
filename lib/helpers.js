//might rewuire database here


//find user email
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

//create new user
//function takes in the db and the userObject
const createNewUser = function(user) {

  const { name, email, password } = user;
  const sqlQuery = `
  INSERT INTO users
    (name, email, password)
  VALUES
    ( $1, $2, $3)
  RETURNING *`;

  return db
  .query(sqlQuery, [name, email, password])
    .then(result => result.rows[0])
    .catch(err => {
      return null;
    });
}
exports.createNewUser = createNewUser;


//Get a single user from the database given their id.
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


