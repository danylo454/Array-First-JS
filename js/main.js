//=========================================== Task - 1 =======================================================
// Написати програму, що копіює елементи 2-х
// масивів розміром 5 елементів кожен в один масив роз-
// міром 10 елементів у такий спосіб: спочатку копіюються
// послідовно всі елементи більші за 0, потім послідовно
// всі елементи рівні 0, а потім послідовно всі елементи
// менші за 0.

// console.log("Task - 1");
// let arr1 = [-5, -4, -2, -7, -1];
// let arr2 = [0, 1, -200, 3, 1];
// var arr = arr1.concat(arr2);
// arr.sort(function (a, b) {
//   return a - b;
// });
// arr.forEach((item) => {
//   console.log(item);
// });

//=========================================== Task - 1 =======================================================
//=========================================== Task - 2 =======================================================
// Написати програму «успіхи». Користувач
// вводить 10 оцінок студента. Реалізувати меню для ко-
// ристувача:
// ■ Вивід оцінок (вивід вмісту масиву);
// ■ Перездача іспиту (користувач вводить номер елемента
// масиву й нову оцінку);
// ■ Чи виходить стипендія (стипендія виходить, якщо
// середній бал є не нижчим за 10.7)

// console.log("Task - 2");
// let marks = [];
// for (let i = 0; i < 3; ) {
//   marks.push(parseInt(prompt(`Enter mark ${++i}`)));
// }
// let exit = -1;
// do {
//   exit = parseInt(
//     prompt(
//       `1) Show estimates\n2) Retake the exam\n3) Is there a scholarship\n0) Exit`
//     )
//   );
//   if (exit === 1) {
//     marks.forEach((item, index) => {
//       console.log(`Mark ${index}) = ${item}`);
//     });
//   } else if (exit === 2) {
//     console.clear();
//     marks.forEach((item, index) => {
//       console.log(`Mark ${index}) = ${item}`);
//     });
//     let index = parseInt(prompt(`Enter index mark`));
//     let mark = parseInt(prompt(`Enter new mark ${marks.length}`));

//     if (index >= marks.length || index < 0) {
//       console.error("Error index !!!");
//       alert("Error index !!!");
//     } else {
//       marks[index] = mark;
//       console.clear();
//       marks.forEach((item, index) => {
//         console.log(`Mark ${index}) = ${item}`);
//       });
//     }
//   } else if (exit == 3) {
//     console.clear();
//     const average = marks.reduce((a, b) => a + b, 0) / marks.length;
//     if (average > 10.7) {
//       console.log(`AVG Marks = `, average, " The scholarship will be");
//     } else {
//       console.log(`AVG Marks = `, average, " The scholarship will not be");
//     }
//   }
// } while (exit != 0);

//=========================================== Task - 2 =======================================================
//=========================================== Task - 3 =======================================================
// Написати гру «Кубики». Користувач і комп'ю-
// тер по черзі кидають 2 кубики. Переможець той, у кого
// за результатами 3х кидків сума більше. Передбачити
// красивий інтерфейс гри.
// Використовувати генерацію випадкових чисел

// let exit = 0;
// do {
//   let play = 0;
//   function getRandomInt() {
//     return Math.floor(Math.random() * 13);
//   }
//   let arrayPlayer = [];
//   let arrayComputer = [];
//   do {
//     arrayPlayer.push(getRandomInt());
//     arrayComputer.push(getRandomInt());
//     alert(`Shot your => ${arrayPlayer[play]}`);
//     alert(`Shot computer => ${arrayComputer[play]}`);
//     console.log(`Shot your => ${arrayPlayer[play]}`);
//     console.log(`Shot computer => ${arrayComputer[play]}`);
//     play++;
//   } while (play != 3);
//   let symPlayer = 0;
//   let symComputer = 0;
//   for (let i = 0; i < 3; i++) {
//     symPlayer += arrayPlayer[i];
//     symComputer += arrayComputer[i];
//   }
//   if (symPlayer > symComputer) {
//     alert(`You win your bals => ${symPlayer} bals computer => ${symComputer}`);
//     console.log(
//       `You win your bals => ${symPlayer} bals computer => ${symComputer}`
//     );
//   } else if (symPlayer < symComputer) {
//     alert(`You lose your bals => ${symPlayer} bals computer => ${symComputer}`);
//     console.log(
//       `You win your bals => ${symPlayer} bals computer => ${symComputer}`
//     );
//   } else {
//     alert("It is Draw !!!");
//     console.log("It is Draw !!!");
//   }

//   exit = parseInt(prompt(`Play egain Enter 1\nExit Enter 2`));
//   if (exit > 2 || exit < 1) {
//     alert("Error!!!");
//     exit = 2;
//   } else if (exit === 1) {
//     console.clear();
//   } else {
//     exit = 2;
//   }
// } while (exit != 2);

//=========================================== Task - 3 =======================================================
