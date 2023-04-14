const tops = document.querySelectorAll(".main__top-2");
const bottoms = document.querySelectorAll(".main__bottom");
const daysEl = document.querySelectorAll(".days");
const hoursEl = document.querySelectorAll(".hours");
const minutesEl = document.querySelectorAll(".minutes");
const secondsEl = document.querySelectorAll(".seconds");

function disableAnimation() {
  tops.forEach((top) => {
    top.classList.remove("open");
    console.log(top);
  });
}

function switchAnimation() {
  tops.forEach((top) => {
    top.classList.add("open");
  });
}

let time = 1209600;

function updateCountDown() {
  const minutes = 60;
  const hours = 3600;
  const days = hours * 24;

  let timeDays = Math.floor(time / days);
  let timeHours = Math.floor((time % days) / hours);
  let timeMinutes = Math.floor((time % hours) / minutes);
  let timeSeconds = Math.floor(time % minutes);

  timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

  daysEl.forEach((day) => {
    day.textContent = timeDays;
  });
  hoursEl.forEach((hour) => {
    hour.textContent = timeHours;
  });
  minutesEl.forEach((minute) => {
    minute.textContent = timeMinutes;
  });
  secondsEl.forEach((second) => {
    second.textContent = timeSeconds;
  });
}

window.addEventListener("load", () => {
  let interval1 = setInterval(() => {
    updateCountDown();
    time--;
    let interval2 = setInterval(() => {
      switchAnimation();
    }, 300);
    if (time < 0) {
      disableAnimation();
      clearInterval(interval1);
      clearInterval(interval2);
    }
  }, 1000);
});
