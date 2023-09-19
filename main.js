const { getDayOfTheWeek, makeCalendar } = require("./labTwo");

const readline = require("readline-sync");
const year = readline.question("Enter a year");
const month = readline.question("Enter a month");
const day = readline.question("Enter a day");

console.log (getDayOfTheWeek(year, month, day));
console.log (makeCalendar(2019));



