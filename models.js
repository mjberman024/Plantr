const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');
// const Work = db.model('work');

const Gardener = db.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Plot = db.define('plot', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
});

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  'planted_on': Sequelize.DATE
});

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

Vegetable.belongsToMany(Plot, {through: 'work'});
Plot.belongsToMany(Vegetable, {through: 'work'});

Gardener.belongsTo(Vegetable, {as: 'fav_veg'});

module.exports = db;
