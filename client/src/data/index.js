const defaultData = [{
    id: 1,
    email: "test",
    statusIdx: 0,
    date: "2023-04-07T07:00:00.000Z",
    title: "Human Interest Form",
    content: "Fill out human interest distribution form"
}, {
    id: 2,
    email: "test",
    statusIdx: 0,
    date: "2023-04-07T07:00:00.000Z",
    title: "Purchase present",
    content: "Get an anniversary gift"
}, {
    id: 3,
    email: "test",
    statusIdx: 0,
    date: "2023-04-07T07:00:00.000Z",
    title: "Invest in investments",
    content: "Call the bank to talk about investments"
}, {
    id: 4,
    email: "test",
    statusIdx: 0,
    date: "2023-04-07T07:00:00.000Z",
    title: "Daily reading",
    content: "Finish reading Intro to UI/UX"
}];

const statuses = [{
    status: "Open",
    icon: "⭕️",
    color: "#EB5A46"
}, {
    status: "In Progress",
    icon: "🔆️",
    color: "#00C2E0"
}, {
    status: "In Review",
    icon: "📝",
    color: "#C377E0"
}, {
    status: "Done",
    icon: "✅",
    color: "#3981DE"
}];

const daysOfWeek = [{
    day: 0,
    dayStr: "Sun",
    color: "#EB5A46"
}, {
    day: 1,
    dayStr: "Mon",
    color: "#EB5A46"
}, {
    day: 2,
    dayStr: "Tue",
    color: "#00C2E0"
}, {
    day: 3,
    dayStr: "Wed",
    color: "#C377E0"
}, {
    day: 4,
    dayStr: "Thu",
    color: "#3981DE"
}, {
    day: 5,
    dayStr: "Fri",
    color: "#EB5A46"
}, {
    day: 6,
    dayStr: "Sat",
    color: "#EB5A46"
}];

export { defaultData, statuses, daysOfWeek };