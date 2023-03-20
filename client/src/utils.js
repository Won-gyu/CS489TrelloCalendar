const getDayFromDate = (date) => {
    return new Date(date);
}

const getLastDayFromMonthAndYear = (year, month) => {
    // var month = 0; // January
    var d = new Date(year, month, 0);
    return d.getDate();
}

const removeTask = (items, item) => {
    const day = new Date(item.date).getDate();
    items[day] = items[day].filter(i => i.id != item.id);
    return items;
}

const getTasksByDay = (items, year, month) => {
    const endDayOfMonth = getLastDayFromMonthAndYear(year, month);
    const tasks = items.filter(i => {
        const date = new Date(i.date);
        return date.getMonth() + 1 == month && date.getFullYear() == year;
    });
    const tasksByDay = [];
    for (let i = 0; i <= endDayOfMonth; i++) {
        tasksByDay[i] = [];
    }

    for (let i = 0; i < tasks.length; i++) {
        const date = new Date(tasks[i].date);
        tasksByDay[date.getDate()].push(tasks[i]);
    }
    return tasksByDay;
}

export { getDayFromDate, getLastDayFromMonthAndYear, getTasksByDay, removeTask };