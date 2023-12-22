function cambiarImagen() {
    const imagenes = [
        'url("../assets/balance.jpg")',
        'url("../assets/beach.jpg")',
        'url("../assets/buddhism.jpg")',
        'url("../assets/lake.jpg")',
        'url("../assets/landscape.jpg")',
        'url("../assets/ocean.jpg")',
        'url("../assets/oilseed.jpg")',
        'url("../assets/seascape.jpg")',
        'url("../assets/stones.jpg")',
        'url("../assets/wood.jpg")'
    ];

     if (!document.body.style.backgroundImage) {
        document.body.style.backgroundImage = imagenes[0];
    } else {
       
        const randomImagen = imagenes[Math.floor(Math.random() * imagenes.length)];
        document.body.style.backgroundImage = randomImagen;
    }
}

setInterval(cambiarImagen, 15000);
