const db = require('./models');

db.sync({
  force: true
}).then(() => {
  console.log("I'm working!");
  db.close();
}).catch(err => {
  console.log(err);
  db.close();
});
