function cambiarImagen() {
    const imagenes = [
        'url("assets/balance.jpg")',
        'url("assets/beach.jpg")',
        'url("assets/buddhism.jpg")',
        'url("assets/lake.jpg")',
        'url("assets/landscape.jpg")',
        'url("assets/ocean.jpg")',
        'url("assets/oilseed.jpg")',
        'url("assets/seascape.jpg")',
        'url("assets/stones.jpg")',
        'url("assets/wood.jpg")'
    ];

     
   
       
      
    
      if (!document.body.style) {
        document.body.style.backgroundImage = imagenes[0];
        document.body.style.backgroundRepeat= no-repeat
        document.body.style.backgroundSize= cover;

      }
      
      else{
        const randomImagen = imagenes[Math.floor(Math.random() * imagenes.length)];
        document.body.style.backgroundImage = randomImagen;
        document.body.style.backgroundRepeat= no-repeat
        document.body.style.backgroundSize= cover;
    }
}

setInterval(cambiarImagen, 15000); 


