const currentDate = new Date();
let day = currentDate.getUTCDay();
let ms = currentDate.getUTCMilliseconds();
setInterval(function() {
    document.getElementById("currentUTCTime").innerHTML = ms
    document.getElementById("currentDayOfTheWeek").innerHTML = day;

    }, 1000)
   



// function addZero(x, n) {
//     while (x.toString().length < n) {
//       x = "0" + x;
//     }
//     return x;
//   }
  
//   const d = new Date();
//   let h = addZero(d.getUTCHours());
//   let m = addZero(d.getUTCMinutes());
//   let s = addZero(d.getUTCSeconds());
//   let ms = addZero(d.getUTCMilliseconds());
//   let time = h + ":" + m + ":" + s;
