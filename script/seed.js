"use strict";

const {
	db,
	models: { User, Item },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
	await db.sync({ force: true }); // clears db and matches models to tables
	console.log("db synced!");

	// Creating Users
	const users = await Promise.all([
		User.create({ username: "cody", password: "123" }),
		User.create({ username: "murphy", password: "123" }),
	]);

	const items = await Promise.all([
		Item.create({
			name: "Churro T-Shirt",
			price: 20.0,
			imageURL: "/images/merch/churro.jpeg",
			itemURL:
				"https://for-the-love-of-theme-parks.creator-spring.com/listing/for-the-love-of-churros-ftlo?product=2",
			itemType: "T-Shirt",
		}),
		Item.create({
			name: "Mountain View T-Shirt",
			price: 20.0,
			imageURL: "/images/merch/pata.jpeg",
			itemURL:
				"https://for-the-love-of-theme-parks.creator-spring.com/listing/mountain-view-ftlotp?product=2",
			itemType: "T-Shirt",
		}),
		Item.create({
			name: "Theme Park Mysteries T-Shirt",
			price: 20.0,
			imageURL: "/images/merch/unsolvedmysteries.jpeg",
			itemURL:
				"https://for-the-love-of-theme-parks.creator-spring.com/listing/theme-park-mysteries-ftlotp?product=2",
			itemType: "T-Shirt",
		}),
		Item.create({
			name: "F.T.L.O.T.P T-Shirt",
			price: 20.0,
			imageURL: "/images/merch/friends.jpeg",
			itemURL:
				"https://for-the-love-of-theme-parks.creator-spring.com/listing/f-t-l-o-t-p?product=2",
			itemType: "T-Shirt",
		}),
		Item.create({
			name: "Mountain View Tank",
			price: 20.0,
			imageURL: "/images/merch/patatank.jpeg",
			itemURL:
				"https://for-the-love-of-theme-parks.creator-spring.com/listing/mountain-view-tank-top?product=14",
			itemType: "Tank Top",
		}),
		Item.create({
			name: "Theme Park Mysteries Tank",
			price: 20.0,
			imageURL: "/images/merch/unsolvedmysteriestank.jpeg",
			itemURL:
				"https://for-the-love-of-theme-parks.creator-spring.com/listing/theme-park-mysteries-tank-top?product=14",
			itemType: "Tank Top",
		}),
		Item.create({
			name: "Churro Tank",
			price: 20.0,
			imageURL: "/images/merch/churrotank.jpeg",
			itemURL:
				"https://for-the-love-of-theme-parks.creator-spring.com/listing/for-the-love-of-churros-tank-t?product=14",
			itemType: "Tank Top",
		}),
		Item.create({
			name: "F.T.L.O.T.P Tank",
			price: 20.0,
			imageURL: "/images/merch/friendstank.jpeg",
			itemURL:
				"https://for-the-love-of-theme-parks.creator-spring.com/listing/new-f-t-l-o-t-p-tank-top?product=14",
			itemType: "Tank Top",
		}),
	]);

	console.log(`seeded ${users.length} users`);
	console.log(`seeded successfully`);
	return {
		users: {
			cody: users[0],
			murphy: users[1],
		},
	};
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
	console.log("seeding...");
	try {
		await seed();
	} catch (err) {
		console.error(err);
		process.exitCode = 1;
	} finally {
		console.log("closing db connection");
		await db.close();
		console.log("db connection closed");
	}
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
	runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
