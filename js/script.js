'use strict'

let money = prompt("Ваш бюджет на месяц?", 35000);
let time = prompt("Введите дату в формате YYYY-MM-DD", "2010-10-22");

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpences : {},
    income : [],
    savings : false
};

let questFirst = prompt("Введите обязательную статью расходов в этом месяце", "Качество");
let ansFirst = prompt("Во сколько обойдется?", 100000);
let questSecond = prompt("Введите обязательную статью расходов в этом месяце", "Скорость");
let ansSecond = prompt("Во сколько обойдется?", 100000);

appData.expenses[questFirst] = ansFirst;
appData.expenses[questSecond] = ansSecond;

alert(appData.budget/30);

console.log(appData);
