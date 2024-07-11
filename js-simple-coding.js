// function hoursToMinute (hours){
//     const minute = hours * 60;
//     return minute
// }
// const totalHours =hoursToMinute(10);
// console.log(totalHours);

// function minuteToSecond (minute){
//     const totalSecond = minute * 60;
//     console.log(totalSecond);
// }
// minuteToSecond(2)

// function isEven(number) {
//   const evenNumber = number % 2;
//   if (evenNumber === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const myNumber = isEven(6);
// console.log(myNumber);

// function lepYear (year){
//     const isYear = year % 4;

//     if(isYear === 0){

//         return true
//     }
//     else{

//         return false
//     }
// }
// const myYear =lepYear(2028);
// console.log(myYear);

// function getSumNumber(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//      sum = sum + element;
//      console.log(index, element, sum);
//   }
// //   return sum;
// }

// const myNumbers = [12, 54, 87, 90, 76, 80, 56, 12];
// getSumNumber(myNumbers);
// console.log(getSumNumber);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const number = Array.isArray(numbers);
// console.log(number);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const number = numbers.slice(2, 8);
// console.log(number);
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const number = numbers.splice(2, 8, 33, 90);
// console.log(number);
// console.log(numbers);

// const names = [
//   "a",
//   "b",
//   "e",
//   "i",
//   "o",
//   "u",
//   "a",
//   "e",
//   "d",
//   "o",
//   "m",
//   "c",
//   "e",
//   "w",
//   "e",
//   "r",
// ];

// function duplicateNumbers(names) {
//   const unique = [];
//   for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     if (unique.includes(name) === false) {
//       unique.push(name);
//     }
//   }
//   return unique;
// }
// const uniqueNumber = duplicateNumbers(names);
// console.log(uniqueNumber);

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6,
//   7, 8, 9, 0,
// ];

// function duplicateNumbers(numbers){
//   const unique = [];
//   for(let i=0; i<numbers.length; i++){
//     const index =[i];
//     const element=numbers[index]
//     if(unique.includes(element) === false){
//       unique.push(element)
//     }

//   }
//   return unique;
// }

// const uniqueNumber =duplicateNumbers(numbers);
// console.log(uniqueNumber);

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("foo-bar");
//   } else if (i % 3 === 0) {
//     console.log("foo");
//   } else if (i % 5 === 0) {
//     console.log("bar");
//   }
//   else {
//     console.log(i);
//   }
// }

// function mealBazar(chal, dal, alo, peyaz) {
//   const chalPrice = 60;
//   const dalPrice = 110;
//   const aloPrice = 70;
//   const peyazPrice = 100;

//   const totalChalPrice = chal * chalPrice;
//   const totalDalPrice = dal * dalPrice;
//   const totalAloPrice = alo * aloPrice;
//   const totalPeyazPrice = peyaz * peyazPrice;
//   const totalPrice =
//     totalChalPrice + totalDalPrice + totalAloPrice + totalPeyazPrice;
//   return totalPrice;
// }

// const totalBazar = mealBazar(5, 2, 3, 5);
// console.log(totalBazar)

const phones = [
  {
    name: "iPhone",
    price: 150000,
    camera: "50MP",
    colour: "Silver",
    ram: "8GB",
    storage: "512GB",
  },
  {
    name: "Realme",
    price: 20000,
    camera: "8MP",
    colour: "Silver",
    ram: "6GB",
    storage: "256GB",
  },
  {
    name: "Samgsung",
    price: 50000,
    camera: "50MP",
    colour: "Golden",
    ram: "8GB",
    storage: "512GB",
  },
  {
    name: "Redmi",
    price: 155000,
    camera: "6MP",
    colour: "Black",
    ram: "4GB",
    storage: "158GB",
  },
  {
    name: "Nokia",
    price: 30000,
    camera: "32MP",
    colour: "White",
    ram: "6GB",
    storage: "512GB",
  },
];

function chepestPhone(phones) {
  let chepest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < chepest.price) {
      chepest = phone;
    }
  }
  return chepest;
}
const myBudget = chepestPhone(phones);
console.log(myBudget);
