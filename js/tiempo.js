const clima = document.getElementById("clima");
const apiKey = "1f3a6c709f864563a9b174036232012"
const city ="Seville"



const getClima = async () => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);

        if (!response.ok) {
            throw new Error(`Hubo un error cargando el clima`);
        }

        const climaData = await response.json();
        const conditionText = climaData.current.condition.text;

        console.log(`La condición meteorológica actual en ${city} es: ${conditionText}`);
    } catch (error) {
        console.error("Error en la obtención del clima:");
    }
};

getClima();

//PAssword api HolaCaracola88!
