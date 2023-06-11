const inputNumbers = document.querySelectorAll("#digit");
const digitYears = document.querySelector("#years");
const digitMonths = document.querySelector("#months");
const digitDays = document.querySelector("#days");

const date = new Date();
console.log(Math.abs(date.getFullYear() - 2002));
// console.log(Math.abs(date.getMonth() - 12));
// console.log(Math.abs(date.getDate() - 31));
