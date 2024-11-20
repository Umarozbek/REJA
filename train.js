
// // MASALANING SHARTI

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni 
// ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.


// A TASK ENGINEER
// function countLetter(letter, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] === letter) {
//         count++;
//       }
//     }
//     return count;
//   }



  
//   console.log (countLetter("e", "engineer")); // 3 ni return qiladi
//   console.log (countLetter("a", "banana")); 





// =====================Dars 21===================================
// call back functions
// console.log("Jack Maslahatlari");
// const list = [
//   "yahshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yog endi", // 60+
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a < 60) callback(null, list[4]);
//   else callback(null, list[5]);
// }

// maslahatBering(33, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else console.log("Javob:", data);
// });


// =============================DARS 22======================
//  ASYNC VA CALLBACK FUNCTIONLARNING ASOSIY FAQI BU ASYCNI ICHIDA INTERVALLARNI ISHLATSA BOLADI CALLBACKLARDA ESA BUNAQA XUSIYAT BOLMAYDI 


// console.log("Jack Maslahatlari");
// const list = [
//   "yahshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yog endi", // 60+
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(() => {
//       callback(null, list[5]);
//     }, 1000); 
//   }
// };

// console.log("passed here 0");

// maslahatBering(70, (err, data) => {
//   if (err) console.log("error:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// console.log("passed here 1");



// MASALANING SHARTI

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni 
// ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.


// A TASK ENGINEER
function countLetter(letter, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        count++;
      }
    }
    return count;
  }
   
  console.log (countLetter("a", "banana")); 




















// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {   ///setinterval bn bersa bular har sekundda osha javob qaytta qayta beradi
//       resolve(list[5]);
//     }, 5000);                            ///promise ichida settimeout ishlidi
//   });
// }

// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

///then catch
// async function run() {
// let javob = await maslahatBering(25);
// console.log(javob);
//  javob = await maslahatBering(70);
// console.log(javob);
//  javob = await maslahatBering(66);
// console.log(javob);
// }
// run();