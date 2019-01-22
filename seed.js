const { db, Vegetable } = require('./models');

let veggies = ['carrot', 'tomato', 'potato'];
let color = ['orange', 'red', 'brown'];

let vegPromises = [];

for (let x = 0; x < veggies.length; x++) {
  vegPromises.push(
    Vegetable.create({
      name: veggies[x],
      color: color[x],
      planted_on: Date.now(),
    })
  );
}

db.sync({
  force: true,
})
  .then(() => {
    console.log('************', vegPromises);
    return Promise.all(vegPromises);
    // .then(veg => {
    //   console.log(veg);
    // });
  })
  .catch(err => {
    console.log(err);
    // db.close();
  })
  .finally(() => {
    // console.log("I'm working!");
    db.close();
  });
