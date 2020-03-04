'use strict'

let money = +prompt("Ваш бюджет на месяц?", 35000),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2010-10-22");

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpences : {},
    income : [],
    savings : false
};

for (let i = 0; i < 2; i++) {
    let questFirst = prompt("Введите обязательную статью расходов в этом месяце", "Качество"),
        questSecond = +prompt("Во сколько обойдется?", 100000);

        if (typeof(questFirst) === 'string' && typeof(questFirst) != null && typeof(questSecond) != null 
            && questFirst != '' && questSecond != '' && questFirst.length < 50) {
                console.log("done");
                appData.expenses[questFirst] = questSecond; 
        } else {
            i--;
        }
}

// cycle while
// let i = 0;
// while (i < 2) {
//     i++;
//     let questFirst = prompt("Введите обязательную статью расходов в этом месяце", "Качество"),
//         questSecond = +prompt("Во сколько обойдется?", 100000);

//         if (typeof(questFirst) === 'string' && typeof(questFirst) != null && typeof(questSecond) != null 
//             && questFirst != '' && questSecond != '' && questFirst.length < 50) {
//                 console.log("done");
//                 appData.expenses[questFirst] = questSecond; 
//         } else {
//             i--;
//         }
// }

//cycle do-while
// let i = 0;
// do {
//     i++;
//     let questFirst = prompt("Введите обязательную статью расходов в этом месяце", "Качество"),
//         questSecond = +prompt("Во сколько обойдется?", 100000);

//         if (typeof(questFirst) === 'string' && typeof(questFirst) != null && typeof(questSecond) != null 
//             && questFirst != '' && questSecond != '' && questFirst.length < 50) {
//                 console.log("done");
//                 appData.expenses[questFirst] = questSecond; 
//         } else {
//             i--;
//         }
// } while(i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimum level of hapiness");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Middle level of hapiness");
} else if (appData.moneyPerDay > 2000) {
    console.log("High level of hapiness");
} else {
    console.log("Error messagge");
}

console.log(appData);
