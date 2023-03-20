const data = [{
    id: 1,
    icon: "⭕️",
    status: "open",
    date: "Fri Apr 07 2023",
    title: "Human Interest Form",
    content: "Fill out human interest distribution form"
}, {
    id: 2,
    icon: "⭕️",
    status: "open",
    date: "Fri Apr 07 2023",
    title: "Purchase present",
    content: "Get an anniversary gift"
}, {
    id: 3,
    icon: "⭕️",
    status: "open",
    date: "Fri Apr 07 2023",
    title: "Invest in investments",
    content: "Call the bank to talk about investments"
}, {
    id: 4,
    icon: "⭕️",
    status: "open",
    date: "Fri Apr 07 2023",
    title: "Daily reading",
    content: "Finish reading Intro to UI/UX"
}];

const statuses = [{
    status: "open",
    icon: "⭕️",
    color: "#EB5A46"
}, {
    status: "in progress",
    icon: "🔆️",
    color: "#00C2E0"
}, {
    status: "in review",
    icon: "📝",
    color: "#C377E0"
}, {
    status: "done",
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

export { data, statuses, daysOfWeek };