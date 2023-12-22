var myHeaders = new Headers();
myHeaders.append("X-Requested-With", "XMLHttpRequest");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/10344346102", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  const city = "Seville";
const apiKey = "1f3a6c709f864563a9b174036232012";

const getClima = async () => {
  try {

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`);

    if (!response.ok) {
      throw new Error(`Hubo un error cargando el clima actual`);
    }

    const climaData = await response.json();


    mostrarInformacion(climaData.current);


    const horaClima = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no&hours=24`);

    if (!horaClima.ok) {
      throw new Error(`Hubo un error cargando la previsión horaria`);
    }

    const horaData = await horaClima.json();


    const horaForecast = horaData.forecast.forecastday[0].hour;
    mostrarPrevisionPorHoras(horaForecast);

  } catch (error) {
    console.error("Error en la obtención del clima");
  }
};


const mostrarInformacion = data => {
  const actualInfo = document.getElementById("actualInfo");
  actualInfo.innerHTML = `
      <div class="infoTiempo">
        <p>Ciudad: Seville</p>
      </div>
      <div class="infoTiempo">
        <p>Estado del clima: ${data.condition.text}</p>
        <img src="${data.condition.icon}" alt="Icono del clima">
      </div>
      <div class="infoTiempo">
        <p>Temperatura: ${data.temp_c} °C</p>
      </div>
      <div class="infoTiempo">
        <p>Precipitaciones: ${data.precip_mm} mm</p>
      </div>
      <div class="infoTiempo">
        <p>Humedad: ${data.humidity}%</p>
      </div>
      <div class="infoTiempo">
        <p>Viento: ${data.wind_kph} km/h</p>
      </div>
      <hr>
  `;
};


const mostrarPrevisionPorHoras = horaForecast => {
  const horaForecastContainer = document.getElementById("horaForecast");

  horaForecast.forEach(hour => {
    const infoDiv = document.createElement("div");

   
    const imageUrl = `https:${hour.condition.icon}`;

    infoDiv.innerHTML = `
        <div class="infoTiempo">
          <p>${hour.time}</p>
        </div>
        <div class="infoTiempo">
          <p><img src="${imageUrl}" alt="Icono del clima"></p>
        </div>
        <div class="infoTiempo">
          <p>Temperatura: ${hour.temp_c} °C</p>
        </div>
        <div class="infoTiempo">
          <p>Precipitaciones: ${hour.precip_mm} mm</p>
        </div>
        <hr>
    `;
    horaForecastContainer.appendChild(infoDiv);
  });
};

getClima();
