export function llenado_tienda(){
    let productos = [
     
        { foto: "img/Creeper.webp", nombre: "Plushie Crepper", desc: "Creeper esponjosito y abrazable, ¿Quien no querria estallar de amor?.", precio: 50000 },
        { foto: "img/Ajolote.webp", nombre: "Plushie Ajolote",  desc: "Un ajolote sin mas, solo por terminos de sentido comun no lo metas en un balde con agua.", precio: 50000 },
        { foto: "img/Taza_enderman.webp", nombre: "Taza con diseño de Enderman",  desc: "Taza rediseñada para que te de miedo por las noches.", precio: 20000 },
        { foto: "img/Taza_perritos.webp", nombre: "Taza con diseño de perritos",  desc: "¿Porque no compartes una taza con tu pareja? Parece un buen plan.", precio: 20000 },
        { foto: "img/Lampara_antorcha.webp", nombre: "Lampara de antorcha",  desc: "Para iluminar tus noches mas oscuras, procura que no este a mas de 15mts de distancia.", precio: 70000 },
        { foto: "img/Lampara_espada.webp", nombre: "Lampara de espada",  desc: "Para que combatas esos temibles monstruos de la oscuridad.", precio: 85000 },
        { foto: "img/Buzo_enderman.webp", nombre: "Buzo de Enderman",  desc: "Quien sabe, a lo mejor te teletransporta a algún lugar bonito.", precio: 45000 },
        { foto: "img/Buzo_mobs.webp", nombre: "Buzo de mobs",  desc: "Ten cuidado con los peligros que acechan tu vestimenta.", precio: 45000 },
        { foto: "img/Buzo_camuflaje.webp", nombre: "Buzo de camuflaje",  desc: "Quizá haya alguna sopresa escondida en esos arbustos.", precio: 45000 },
        { foto: "img/Buzo_creeper.webp", nombre: "Buzo de Creeper",  desc: "¿A quien no le gustaria explotar de felicidad?", precio: 45000 }
]

let fila = document.getElementById("fila");

productos.forEach(function(producto){

    let columna = document.createElement('div');

    columna.classList.add('col');

    let tarjeta = document.createElement('div');

    tarjeta.classList.add('card');
    tarjeta.classList.add('h-100');
    tarjeta.classList.add('tarjeta__producto');
    

    let foto = document.createElement('img');
    
    foto.classList.add('card-img-top');
    foto.classList.add('p-4');
    foto.src = producto.foto;

    let cuerpo = document.createElement('div');

    cuerpo.classList.add('card-body');

    let titulo = document.createElement('h4');

    titulo.classList.add('card-title');
    titulo.classList.add('text-center');
    titulo.setAttribute('style', 'color: black; font-family: Fugaz One, cursive;');
    titulo.textContent = producto.nombre;

    let descripcion = document.createElement('p');

    descripcion.classList.add('card-text');
    descripcion.setAttribute('style', 'color: black; text-align: center;');
    descripcion.textContent = producto.desc;

    let precio = document.createElement('h5');

    precio.classList.add('precio__tarjeta');
    precio.setAttribute('style', 'color: black; text-align: center; font-weight: bolder; font-size: 2em;');
    precio.textContent = producto.precio;


    let boton = document.createElement('a');

    boton.classList.add('btn');
    boton.classList.add('boton__tarjeta');
    boton.textContent = 'Ver Producto';

    tarjeta.appendChild(cuerpo);


    cuerpo.appendChild(foto);
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(descripcion);
    cuerpo.appendChild(precio);
    cuerpo.appendChild(boton);
    

    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})
}



