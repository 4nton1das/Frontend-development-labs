function calculateVacationCost(groupType, peopleCount, dayOfWeek) {
    let pricePerPerson;
    switch (dayOfWeek) {
        case "Friday": pricePerPerson = groupType === "Students" ? 8.45 : groupType === "Regular" ? 15 : 10.90; break;
        case "Saturday": pricePerPerson = groupType === "Students" ? 9.80 : groupType === "Regular" ? 20 : 16; break;
        case "Sunday": pricePerPerson = groupType === "Students" ? 10.46 : groupType === "Regular" ? 22.50 : 10.46; break;
    }

    let totalPrice = pricePerPerson * peopleCount;
    if (groupType === "Students" && peopleCount >= 30) totalPrice *= 0.85;
    if (groupType === "Corporate" && peopleCount >= 100) totalPrice = pricePerPerson * (peopleCount - 10);
    if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20) totalPrice *= 0.95;

    return "Общая цена: " + totalPrice.toFixed(2);
}

console.log(calculateVacationCost("Students", 30, "Sunday"));
console.log(calculateVacationCost("Regular", 40, "Saturday"));
