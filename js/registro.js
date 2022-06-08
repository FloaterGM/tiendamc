import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let boton=document.getElementById('boton_registro')
let modalregistro=new bootstrap.Modal(document.getElementById('mensaje_info'))
let textoModal=document.getElementById('mensaje_modal_info')

boton.addEventListener('click',function(evento){

    evento.preventDefault()
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

        const user = userCredential.user;
        console.log('Exito en el registro')
        textoModal.textContent='El registro fue exitoso'
        modalregistro.show()
        let formulario=document.getElementById('formulario_registro')
        formulario.reset() 
        setTimeout(function(){
            modalregistro.hide()
            window.location.href="./ingreso.html"
        },2000)

        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('Fallo ' + errorMessage)
        textoModal.textContent='Fallamos: ' + errorMessage
        modalregistro.show()
        setTimeout(function(){
            modalregistro.hide()
        },2000) 
    });



})