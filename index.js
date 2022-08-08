const currentTime = () => {
  const clock = document.querySelector("h1");
  
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  
  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;

  if (hh === 20) {
    document.getElementById("hora").style.color = "#ffff00";
  };

  if (hh === 21) {
    document.getElementById("hora").style.color = "#ff0000";
  };
  
  let time = `${hh}:${mm}`;
  clock.innerText = time;
};

currentTime();
setInterval(currentTime, 1000);