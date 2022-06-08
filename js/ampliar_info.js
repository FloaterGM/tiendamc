export function ampliar_info(evento){

    let producto = {};

    producto.foto = evento.target.parentElement.querySelector('img').src;
    producto.nombre = evento.target.parentElement.querySelector('h4').textContent;
    producto.desc = evento.target.parentElement.querySelector('p').textContent;
    producto.precio = evento.target.parentElement.querySelector('h5').textContent;
    
    let imagen_info = document.getElementById('foto_info');
    let titulo_info = document.getElementById('titulo_info');
    let desc_producto = document.getElementById('desc_producto');
    let precio_producto = document.getElementById('precio_producto');
    
    imagen_info.src = evento.target.parentElement.querySelector('img').src;
    
    titulo_info.textContent = evento.target.parentElement.querySelector('h4').textContent;
    
    desc_producto.textContent = evento.target.parentElement.querySelector('p').textContent;
    
    precio_producto.textContent = evento.target.parentElement.querySelector('h5').textContent;

    return producto;
}

