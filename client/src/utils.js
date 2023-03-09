const getDayFromDate = (date) => {
    return new Date(date);
}

const getLastDayFromMonthAndYear = (year, month) => {
    // var month = 0; // January
    var d = new Date(year, month, 0);
    return d.getDate();
}

export { getDayFromDate, getLastDayFromMonthAndYear };