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
  let monthDiff = currentMonth - inputMonths.value;
  let dayDiff = currentDay - inputDays.value;

  if (monthDiff < 0) {
    monthDiff = currentMonth;

    if (monthDiff !== yearDiff) {
      yearDiff--;
    }
  }

  digitYears.textContent = yearDiff;
  digitMonths.textContent = monthDiff;
  digitDays.textContent = dayDiff;
});
