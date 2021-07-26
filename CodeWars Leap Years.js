let isLeapYear = (year) => {
    console.log(year + ' is a')

    if(year % 100 === 0) {
        console.log(`${year} is not a leap year!`)
        return false
    if(year % 4 === 0 && year % 400 === 0) {
        console.log(`${year} is a leap year!`)
        return true
    }
}

isLeapYear(1234)

