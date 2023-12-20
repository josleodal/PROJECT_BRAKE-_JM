let time = new Date();
let year = time.getFullYear();
let month = 1 + time.getMonth();
let day = time.getUTCDate();
let hour = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

const date = document.getElementById('date');
const clock = document.getElementById('clock');

const updateDate = () => {
    let newDay;
    if (day < 10) {
      newDay = "0" + day;
    } else {
      newDay = day;
    }
  
    let newMonth;
    if (month < 10) {
      newMonth = "0" + month;
    } else {
      newMonth = month;
    }
  
    date.innerHTML = `${newDay}/${newMonth}/${year}`;
  };
  
  const updateClock = () => {
    let newMinutes;
    if (minutes < 10) {
      newMinutes = "0" + minutes;
    } else {
      newMinutes = minutes;
    }
  
    let newHour;
    if (hour < 10) {
      newHour = "0" + hour;
    } else {
      newHour = hour;
    }
  
    let newSeconds;
    if (seconds < 10) {
      newSeconds = "0" + seconds;
    } else {
      newSeconds = seconds;
    }
  
    clock.innerHTML = `${newHour}:${newMinutes}:${newSeconds}`;
  };

const fecha = () => {
    if (hour === 0 && minutes === 0 && seconds === 0) {
      // Restablecer la fecha al inicio de cada día
      day++;
  
      // Verificar si es el último día del mes
      if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
        day = 1;
        month++;
      } else if (month === 2) {
        // Verificar si es el último día de febrero
        const leapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        let lastDayOfFebruary;
            if (leapYear) {
            lastDayOfFebruary = 29;
            } else {
                lastDayOfFebruary = 28;
            }
  
        if (day === lastDayOfMonth + 1) {
          day = 1;
          month++;
        }
      } else if (day === 32) {
        // Verificar si es el último día de los meses con 31 días
        day = 1;
        month++;
      }
  
      if (month === 13) {
        month = 1;
        year++;
      }
  
      updateDate();
    }
  };
const onTime = () => {
  if (seconds < 59) {
    seconds++;
  } else {
    seconds = 0;

    if (minutes < 59) {
      minutes++;
    } else {
      minutes = 0;

      if (hour < 23) {
        hour++;
      } else {
        hour = 0;
      }
    }
  }

  updateClock();
  fecha(); // Llama a la función fecha después de actualizar el reloj
};

const frases=()=>{
    const frases=document.getElementById("frases")

    if(hour>=0&&hour<7){

    frases.innerHTML=`Es hora de descansar. Apaga y sigue mañana`

} else if ((hour === 7 && minutes >= 1) || (hour > 7 && hour < 14) || (hour === 14 && minutes === 0)){


    frases.innerHTML=`Buenos días, desayuna fuerte y a darle al código`




}

else if ((hour === 12 && minutes >= 1) || (hour === 13) || (hour === 14 && minutes === 0)){


    frases.innerHTML=`Echa un rato más pero no olvides comer`




}
else if((hour === 14 && minutes >= 1) || (hour ===15) || (hour === 16 && minutes === 0)){


    frases.innerHTML=`Espero que hayas comido`




}
else if((hour === 16 && minutes >= 1) || (hour ===17) || (hour === 18 && minutes === 0)){


    frases.innerHTML=`Buenas tardes, el último empujón`




}
else if((hour === 18 && minutes >= 1) || (hour > 18 && hour < 22) || (hour === 22 && minutes === 0)){


    frases.innerHTML=` Esto ya son horas extras, ... piensa en parar pronto`




}
else{

        frases.innerHTML=`Buenas noches, es hora de pensar en parar y descansar`


}

}

frases();

// Actualizar la fecha y el reloj al inicio
updateDate();
updateClock();

setInterval(onTime, 1000);