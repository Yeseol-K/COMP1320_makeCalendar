function getDayOfTheWeek (year, month, day) {
    
    const monthCodes = {
        "January":1,
        "February":4,
        "March":4,
        "April":0,
        "May":2,
        "June":5,
        "July":0,
        "August":3,
        "September":6,
        "October":1,
        "November":4,
        "December":6,
    }

    const step1 = Math.floor((year % 100) / 12);
    console.log(step1);

    const step2 = (year % 100) % 12;
    console.log(step2);
    
    const step3 = Math.floor(step2 / 4);
    console.log(step3);
    
    const step4 = parseInt(day);
    console.log(step4);
    
    let step5 = monthCodes[month];
    
    if ((month === "January" || month === "February") && isLeapYear(year)) {
        step5 = (step5 - 1);
    }
    if (isLeapYear(year)){
            if (year >= 1600 && year < 1700) {
                step5 = (step5 + 6);
            } else if (year >= 1700 && year < 1800) {
                step5 = (step5 + 4);
            } else if (year >= 1800 && year < 2000) {
                step5 = (step5 + 2);
            } else if (year >= 2000 && year < 2100) {
                step5 = (step5 + 6);
            } else if (year >= 2100) {
                step5 = (step5 + 4);  
            }
        } console.log (step5);

    let step6 = ((step1 + step2 + step3 + step4 + step5) % 7);
    const week = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        return week[step6];
    
    // const result = (week[step6]).substring(0, 3);
    // return result;
}


function isLeapYear(year){
    return ((0 == year % 4) && (0 != year % 100) || (0 == year % 400));
}

function makeCalendar(year) {
    const monthList = {
        "January":1,
        "February":2,
        "March":3,
        "April":4,
        "May":5,
        "June":6,
        "July":7,
        "August":8,
        "September":9,
        "October":10,
        "November":11,
        "December":12,
    }
    const fullDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(isLeapYear(year)){
        fullDay[1]= 29; //leap year 29days 
    }
    for (const [monthName, monthNum]of Object.entries(monthList)) {
        for (let i = 1; i<=fullDay[monthNum - 1]; i++) {
            //day = i start 1
           console.log (monthNum + "-" + i + "-" + year + "is a " + getDayOfTheWeek(year, monthName, i)); 
        }
    } 
    
}

module.exports = { getDayOfTheWeek, makeCalendar };




//return send the function getDayOfTheWeek to main.js from labTwo.js
