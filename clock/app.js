// change image of sun and moon with
function changeImg() {
  const clockNight = new Date();
  let DaysAndNight = clockNight.getHours();

  if (7 <= DaysAndNight && DaysAndNight < 20) {

    document.getElementById('img').src = 'clip_art/day.png';


  } else {
    document.getElementById('img').src = 'clip_art/night1.png';
  }
}

changeImg();

function clock() {
  const fullclock = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let Hours = fullclock.getHours();
  let Minute = fullclock.getMinutes();
  let second = fullclock.getSeconds();
  let day = days[fullclock.getDay()];
  let month = months[fullclock.getMonth()];
  let date = fullclock.getDate();
  let year = fullclock.getFullYear();

  if (Hours < 10) {
    Hours = "0" + Hours;
  }
  if (Minute < 10) {
    Minute = "0" + Minute;
  }

  if (second < 10) {
    second = "0" + second;
  }

  document.getElementById('hours').innerHTML = Hours;
  document.getElementById('min').innerHTML = ": " + Minute;
  document.getElementById('sec').innerHTML = ": " + second;
  document.getElementById('din').innerHTML = day;
  document.getElementById('month').innerHTML = month;
  document.getElementById('date').innerHTML = date;
  document.getElementById('years').innerHTML = year;
}

setInterval(clock, 100);
