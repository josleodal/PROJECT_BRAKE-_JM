const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()-_=+";

let remix = mayusculas + minusculas + numeros + simbolos;




function generarContraseña() {
    password = ''; 

    const lengthSelect = document.getElementById("lengthSelect");
    const length = parseInt(lengthSelect.value);

    if (isNaN(length) || length < 12 || length > 50) {
        alert('La longitud de la contraseña debe estar entre 12 y 50 caracteres.');
        return;
    }

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * remix.length);
        password += remix.charAt(random);
    }

    const result = document.getElementById('result')

   result.innerHTML = `<p>Contraseña: ${password}<p>`;
}


const buttonPassword = document.getElementById("buttonPassword")

buttonPassword.addEventListener("click", generarContraseña);