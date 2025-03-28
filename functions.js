let titulo = document.createElement('h1');
titulo.innerText = 'Tengo un mensajito para ti mi amor 💘';
document.getElementById("titulo").append(titulo);

let imagen = document.createElement('img');
imagen.src = 'Pompompurin.png';
document.getElementById("principal").append(imagen);

let boton = document.createElement('button');
boton.innerText = 'Haz click aquí para una sorpresita owo';
document.getElementById("principal").append(boton);

boton.addEventListener('click', () => {
    imagen.src = 'macarron.png';
    document.getElementById("principal").append(imagen);
    titulo.innerText = 'Eres lo mejor que me ha pasado y solo quiero decirte que te quiero mucho y estoy muy orgulloso de todas las cosas que haces, soy un hombre feliz de tenerte a mi lado';
    boton.style.display = 'none';
    
})