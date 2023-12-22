function cambiarImagen() {
    const imagenes = [
        'url("https://github.com/josleodal/PROJECT_BRAKE-_JM/blob/main/assets/balance.jpg")',
        'url("https://github.com/josleodal/PROJECT_BRAKE-_JM/blob/main/assets/beach.jpg")',
        'url("https://github.com/josleodal/PROJECT_BRAKE-_JM/blob/main/assets/buddhism.jpg")',
        'url("https://github.com/josleodal/PROJECT_BRAKE-_JM/blob/main/assets/lake.jpg")',
        'url("https://github.com/josleodal/PROJECT_BRAKE-_JM/blob/main/assets/landscape.jpg")',
        'url("https://github.com/josleodal/PROJECT_BRAKE-_JM/blob/main/assets/ocean.jpg")',
        'url("https://github.com/josleodal/PROJECT_BRAKE-_JM/blob/main/assets/oilseed.jpg")',
        'url("https://github.com/josleodal/PROJECT_BRAKE-_JM/blob/main/assets/seascape.jpg")',
        'url("https://github.com/josleodal/PROJECT_BRAKE-_JM/blob/main/assets/stones.jpg")',
        'url("https://github.com/josleodal/PROJECT_BRAKE-_JM/blob/main/assets/wood.jpg")'
    ];

     
   
       
      
    
      if (!document.body.style.backgroundImage) {
        document.body.style.backgroundImage = imagenes[0];
        document.body.style.backgroundRepeat= no-repeat
        document.body.style.backgroundSize= cover;

        // Si ya hay una imagen de fondo, cambiarla de forma aleatoria
        const randomImagen = imagenes[Math.floor(Math.random() * imagenes.length)];
        document.body.style.backgroundImage = randomImagen;
        document.body.style.backgroundRepeat= no-repeat
        document.body.style.backgroundSize= cover;
    }
}

setInterval(cambiarImagen, 15000);


//transition: opacity 1s ease-in-out;