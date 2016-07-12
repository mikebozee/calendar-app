var month;
var week;
var day;
var monthName;
var dayNumber;
var daysInMonth = [
	{month: 'January', days: 31, monthNumber: 1},
	{month: 'February', days: 28, monthNumber: 2},
	{month: 'March', days: 31, monthNumber: 3},
	{month: 'April', days: 30, monthNumber: 4},
	{month: 'May', days: 31, monthNumber: 5},
	{month: 'June', days: 30, monthNumber: 6},
	{month: 'July', days: 31, monthNumber: 7},
	{month: 'August', days: 31, monthNumber: 8},
	{month: 'September', days: 30, monthNumber: 9},
	{month: 'October', days: 31, monthNumber: 10},
	{month: 'November', days: 30, monthNumber: 11},
	{month: 'December', days: 31, monthNumber: 12}
];
var date = new Date();
var dateMonth = date.getMonth();

function print(message) {
	document.write(message);
}

function monthPrint() {
	var daysCount = 0;
	var dayTile;
	for (var i = 0; i < daysInMonth.length; i++) {
		monthName = daysInMonth[i];
		daysNumber = daysInMonth[i];
		if (dateMonth + 1 == monthName.monthNumber) {
			console.log(dateMonth);
			dayTile = '<div class="month month-current"><h2 class="month-name">' + monthName.month + '</h2><div class="day-flex">';
		} else {
			dayTile = '<div class="month"><h2 class="month-name">' + monthName.month + '</h2><div class="day-flex">';
		}
		for (var z = 1; z <= daysNumber.days; z++) {
			var dayNo = z;
			var daysOutput = '<div class="day-item">' + dayNo + '</div>'
			dayTile += daysOutput;
		}
		dayTile += '</div></div>';
		print(dayTile);
	}
}

function monthHighlight() {
	if (dateMonth in daysInMonth) {
		console.log('YOOOOOO');
		console.log(daysInMonth[dateMonth].month);
	}
}

monthPrint();
console.log(dateMonth);
monthHighlight();





