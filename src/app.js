const inputYears = document.querySelector("#digit-years");
const inputMonths = document.querySelector("#digit-months");
const inputDays = document.querySelector("#digit-days");
const digitYears = document.querySelector("#years");
const digitMonths = document.querySelector("#months");
const digitDays = document.querySelector("#days");

function calculateTimeDifference(birthdate) {
  const birthdateObj = new Date(birthdate);
  const currentDate = new Date();

  const timeDiff = currentDate.getTime() - birthdateObj.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  const years = Math.floor(daysDiff / 365);
  const months = Math.floor((daysDiff % 365) / 30);
  const days = (daysDiff % 365) % 30;

  return { years, months, days };
}

const birthdate = `${inputYears.value}-${inputMonths.value}-${inputDays.value}`;
const timeDifference = calculateTimeDifference(birthdate);

inputYears.addEventListener("keyup", () => {
  digitYears.textContent = inputYears.value;
});

console.log(
  `${timeDifference.years}: years, ${timeDifference.months}: months, and ${timeDifference.days}: days`
);
