'use strict'

let money = prompt("Ваш бюджет на месяц?", 35000);
let time = prompt("Введите дату в формате YYYY-MM-DD", 2010-10-22);

let appData = {
    budget : money,
    timeData : time,
    expences : {},
    optionalExpences : {},
    income : [],
    savings : false
};

let expA = prompt("Введите обязательную статью расходов в этом месяце", "Качество");
let expB = prompt("Во сколько обойдется?", 100000);

appData.expences.expA = expB;

alert(appData.budget/30);