import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"


let usuario = document.getElementById('email_usuario');
let cerrar = document.getElementById('boton_cerrar');
let iniciar = document.getElementById('iniciar');
let registro = document.getElementById('registro');
let tienda = document.getElementById('tienda');

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;

        usuario.textContent = user.email;
        usuario.classList.remove('invisible');
        iniciar.classList.add('invisible');
        registro.classList.add('invisible');
        tienda.classList.remove('invisible');


    }
    else {

        

    }
});

cerrar.addEventListener('click', function () {
    signOut(auth).then(() => {
        usuario.classList.add('invisible');
        iniciar.classList.remove('invisible');
        registro.classList.remove('invisible');
        tienda.classList.add('invisible');

    }).catch((error) => {
        alert('Error al cerrar sesion')
    });
})
