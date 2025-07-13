function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  document.getElementById('secondHand').style.transform = `translate(-50%, 0) rotate(${secondDeg}deg)`;
  document.getElementById('minuteHand').style.transform = `translate(-50%, 0) rotate(${minuteDeg}deg)`;
  document.getElementById('hourHand').style.transform = `translate(-50%, 0) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
