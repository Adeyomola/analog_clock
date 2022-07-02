const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");
const secondsHand = document.querySelector(".secondsHand");

function time() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minute = now.getMinutes();
  const minuteDegree = (minute / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + (minute / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
time();
setInterval(time, 1000);
