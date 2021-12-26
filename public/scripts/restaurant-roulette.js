/* global $, luxon */ // Tell ESLint to ignore undefined globals.

const DAY_DICT = {
	0: 'Sun',
	1: 'Mon',
	2: 'Tues',
	3: 'Wed',
	4: 'Thurs',
	5: 'Fri',
	6: 'Sat',
};

Number.prototype.between = function (a, b) {
	var min = Math.min(a, b),
		max = Math.max(a, b);

	return this >= min && this <= max;
};

function randomItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function parseTime(timeString) {
	return luxon.DateTime.fromFormat(timeString, 'T').toLocaleString(luxon.DateTime.TIME_SIMPLE);
}

function checkIfOpenNow(daysHours, specificTime = ':') {
	const specificTimeArr = specificTime.split(':').map((num) => parseInt(num));
	const today = new Date();
	let hours = specificTimeArr[0] || today.getHours();
	hours = (hours + 1) % 24;
	const minutes = specificTimeArr[1] || today.getMinutes();

	const openingArr = daysHours.opening.split(':').map((num) => parseInt(num));
	const opening = { hours: openingArr[0], minutes: openingArr[1] };

	const closingArr = daysHours.closing.split(':').map((num) => parseInt(num));
	const closing = { hours: closingArr[0], minutes: closingArr[1] };

	// Open 24/7
	if (daysHours.opening == daysHours.closing) {
		return true;
	}

	if (hours == opening.hours) {
		// Not open yet!
		return false;
	}
	if (hours == closing.hours) {
		return minutes.between(0, closing.minutes);
	}

	// CASE I: Opening < Closing
	// (ex: 8:30 < Curr < 22:30); True - [8:00, 21:30]; False - [0:00, 6:59] U [21:31, 23:00]
	if (opening.hours < closing.hours || (opening.hours == closing.hours && opening.minutes < closing.minutes)) {
		return hours.between(opening.hours, closing.hours);
	}

	// CASE II: Closing < Opening
	// (ex: 1:30 < Curr < 10:30); True - [10:00, 23:00] U [0:00, 0:30]; False - [0:31, 9:59]
	if (closing.hours < opening.hours || (opening.hours == closing.hours && closing.minutes < opening.minutes)) {
		return !hours.between(opening.hours, closing.hours);
	}
}

$('details').on('click', () => {
	$(window).trigger('resize');
});

fetch('/data/restaurants.json')
	.then((response) => response.json())
	.then((restaurants) => {
		console.log(restaurants);

		const restaurantPoolList = $('#restaurantPool');
		const openRestaurantsList = $('#openRestaurants');
		let openRestaurants = [];

		for (const restaurantName in restaurants) {
			restaurantPoolList.append($(`<li>${restaurantName}</li>`));

			const restaurant = restaurants[restaurantName];
			const today = DAY_DICT[new Date().getDay()];

			for (const days in restaurant) {
				const daysHours = restaurant[days];

				if (days.split(',').includes(today) && checkIfOpenNow(daysHours)) {
					openRestaurants.push(restaurantName);
					if (daysHours.opening === daysHours.closing) {
						openRestaurantsList.append($(`<li>${restaurantName} (Open 24 hours)</li>`));
					} else {
						openRestaurantsList.append(
							$(
								`<li>${restaurantName} 
								(${parseTime(daysHours.opening)} - ${parseTime(daysHours.closing)})
								</li>`
							)
						);
					}
				}
			}
		}

		$(window).trigger('resize');

		const rollBtn = $('#rollBtn');
		const result = $('#result');
		rollBtn.on('click', function () {
			let newChoice = randomItem(openRestaurants);

			while (newChoice === result.text()) {
				newChoice = randomItem(openRestaurants);
			}

			result.text(newChoice);
		});
	});
