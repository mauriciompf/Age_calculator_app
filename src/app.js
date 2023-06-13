const inputYears = document.querySelector("#digit-years");
const inputMonths = document.querySelector("#digit-months");
const inputDays = document.querySelector("#digit-days");
const digitYears = document.querySelector("#years");
const digitMonths = document.querySelector("#months");
const digitDays = document.querySelector("#days");
const button = document.querySelector("#button");

const emptyValue = "- -";
button.addEventListener("click", () => {
  const currentDay = new Date().getDate();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth + 1;
  digitDays.textContent = currentDay - inputDays.value;
  digitMonths.textContent = currentMonth - inputMonths.value;
  digitYears.textContent = currentYear - inputYears.value;
});
