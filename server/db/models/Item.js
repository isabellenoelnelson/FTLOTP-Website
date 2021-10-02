const Sequelize = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
	name: {
		type: Sequelize.STRING,
	},
	price: {
		type: Sequelize.DECIMAL(10, 2),
	},
	imageURL: {
		type: Sequelize.TEXT,
	},
	itemURL: {
		type: Sequelize.TEXT,
	},
	itemType: {
		type: Sequelize.TEXT,
	},
});

module.exports = Item;
