const inputYears = document.querySelector("#digit-years");
const inputMonths = document.querySelector("#digit-months");
const inputDays = document.querySelector("#digit-days");
const digitYears = document.querySelector("#years");
const digitMonths = document.querySelector("#months");
const digitDays = document.querySelector("#days");
const button = document.querySelector("#button");

const getCurrentDate = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  return { currentDay, currentMonth, currentYear };
};

const calculateDateDifference = (currentValue, inputDate) => {
  if (inputDate >= currentValue) {
    return currentValue + (12 - inputDate);
  } else {
    return inputDate;
  }
};

const updateDisplay = (years, months, days) => {
  digitYears.textContent = years;
  digitMonths.textContent = months;
  digitDays.textContent = days;
};

button.addEventListener("click", () => {
  const { currentDay, currentMonth, currentYear } = getCurrentDate();
  const inputYear = parseInt(inputYears.value);
  const inputMonth = parseInt(inputMonths.value);
  const inputDay = parseInt(inputDays.value);

  let yearDiff = currentYear - inputYear;
  let monthDiff = Math.abs(currentMonth - inputMonth);
  let dayDiff = Math.abs(currentDay - inputDay);

  monthDiff = calculateDateDifference(currentMonth, inputMonth);

  if (inputMonth > currentMonth) {
    yearDiff--;
  }

  updateDisplay(yearDiff, monthDiff, dayDiff);
});
