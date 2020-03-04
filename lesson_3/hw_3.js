'use strict'

let money, time;

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpences: {},
    income: [],
    savings: false
};

chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();

function start() {
    money = +prompt("Ваш бюджет на месяц?", 35000);
    time = prompt("Введите дату в формате YYYY-MM-DD", "2010-10-22");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 35000);
    }
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let questFirst = prompt("Введите обязательную статью расходов в этом месяце", "Качество"),
            questSecond = +prompt("Во сколько обойдется?", 100000);
    
        if (typeof (questFirst) === 'string' && typeof (questFirst) != null && typeof (questSecond) != null &&
            questFirst != '' && questSecond != '' && questFirst.length < 50) {
            console.log("done");
            appData.expenses[questFirst] = questSecond;
        } else {
            i--;
        }
    }
}

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let questFirst = prompt("Статья необязательных расходов?", "Качество"),
            questSecond = +prompt("Во сколько обойдется?", 100000);
    
        if (typeof (questFirst) === 'string' && typeof (questFirst) != null && typeof (questSecond) != null &&
            questFirst != '' && questSecond != '' && questFirst.length < 50) {
            console.log("done");
            appData.optionalExpenses[questFirst] = questSecond;
        } else {
            i--;
        }
    }
}

function detectDayBudget() {
    appData.moneyPerDay = +(appData.budget / 30).toFixed(1);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Minimum level of hapiness");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Middle level of hapiness");
    } else if (appData.moneyPerDay > 2000) {
        console.log("High level of hapiness");
    } else {
        console.log("Error messagge");
    }
}

function checkSavings() {
    if (!appData.savings) appData.savings = true;
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = (save / 100 / 12*percent).toFixed(1);
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
    }
}

console.log(appData);