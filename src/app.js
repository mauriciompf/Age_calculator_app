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
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  let yearDiff = currentYear - inputYears.value;
  let monthDiff = Math.abs(currentMonth - inputMonths.value);
  let dayDiff = Math.abs(currentDay - inputDays.value);

  if (inputMonths.value >= currentMonth) {
    monthDiff = currentMonth + (12 - inputMonths.value);
    if (monthDiff === 12) {
      monthDiff = 0;
    }
  } else {
    monthDiff = inputMonths.value;
  }

  if (inputMonths.value < currentMonth) {
    yearDiff--;
  }

  // if (dayDiff >= currentDay && ) {
  //   console.log("1");
  // } else {
  //   console.log("2");
  //   yearDiff++;
  // }

  digitYears.textContent = yearDiff;
  digitMonths.textContent = monthDiff;
  digitDays.textContent = dayDiff;
});
