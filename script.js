// Targeting HTML elements
const TIME = document.querySelector('.time');
const MILITARY = document.querySelector('.time-military');
const DATE = document.querySelector('.date');
const BTN = document.querySelector('button')

const updateView = () => {
  const date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  n = h >= 13 ? h - 12 : h;
  let sign = date.getHours() >= 12 ? 'PM' : 'AM';
  TIME.innerHTML = `<span class="hour">${n}</span>:<span class="minute">${m}</span>:<span class="second">${s}</span> <span class="midday">${sign}</span>`;
  MILITARY.innerHTML = `<span class="hour">${h}</span>:<span class="minute">${m}</span>:<span class="second">${s}</span> <span class="midday">${sign}</span>`;
  let weekDay = WEEK[date.getDay()];
  let day = date.getDate();
  let suf = checkDate(day);
  let month = MONTH[date.getMonth()];
  let year = date.getFullYear();
  DATE.innerHTML = `<span class="weekDay">${weekDay}</span>, <span class="month">${month}</span> <span class="day">${day}${suf}</span> <span class="year">${year}</span>`;
};

BTN.addEventListener('click', ()=>{
  TIME.classList.toggle('hidden')
  MILITARY.classList.toggle('hidden')
})
const militaryTime = () => {

};

setInterval(updateView, 1000);
