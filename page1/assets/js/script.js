// Aquí puedes añadir cualquier funcionalidad adicional que necesites con JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Por ejemplo, puedes agregar alguna animación o interacción
});


console.log("Conectado")

// Esperar a que el contenido del DOM esté completamente cargado

// Conteo de Likes foto1
document.addEventListener('DOMContentLoaded', () => {
    const botonLike = document.getElementById('boton-like1');
    const conteoLikesElement = document.getElementById('conteo-likes1');
    let conteoLikes1 = 0;
    botonLike.addEventListener('click', () => {
        conteoLikes1++;
        conteoLikesElement.textContent = `${conteoLikes1} likes`;
    });
});

// Conteo de Likes foto2
document.addEventListener('DOMContentLoaded', () => {
    const botonLike = document.getElementById('boton-like2');
    const conteoLikes2Element = document.getElementById('conteo-likes2');
    let conteoLikes2 = 0;
    botonLike.addEventListener('click', () => {
        conteoLikes2++;
        conteoLikes2Element.textContent = `${conteoLikes2} likes`;
    });
});

// Conteo de Likes video1
document.addEventListener('DOMContentLoaded', () => {
    const botonLike = document.getElementById('boton-like3');
    const conteoLikesElement = document.getElementById('conteo-likes3');
    let conteoLikes3 = 0;
    botonLike.addEventListener('click', () => {
        conteoLikes3++;
        conteoLikesElement.textContent = `${conteoLikes3} likes`;
    });
});

// Conteo de Likes video2
document.addEventListener('DOMContentLoaded', () => {
    const botonLike = document.getElementById('boton-like4');
    const conteoLikesElement = document.getElementById('conteo-likes4');
    let conteoLikes4 = 0;
    botonLike.addEventListener('click', () => {
        conteoLikes4++;
        conteoLikesElement.textContent = `${conteoLikes4} likes`;
    });
});


// Remover Boton MegustaPagina
let removerBoton = document.querySelector("#MegustaPagina");

removerBoton.addEventListener('click', function(evento){
    removerBoton.remove()
})

// API perro
document.getElementById('fetchDogImage').addEventListener('click', function ()
{ fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(data =>
{ document.getElementById('dogImage').src = data.message; }).catch(error => console.error('Error:', error)); });



