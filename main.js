const { getDayOfTheWeek, makeCalendar } = require("./labTwo");

const readline = require("readline-sync");
const year = readline.question("Enter a year");
const month = readline.question("Enter a month");
const day = readline.question("Enter a day");

//getDayOfTheWeek(1992,"February", 29));
console.log (getDayOfTheWeek(year, month, day));
<<<<<<< HEAD
console.log (makeCalendar(year));
=======
console.log (makeCalendar(2019));
>>>>>>> 31d1e3dbcca044d7cf7854508e94b5d95d8c97ee



