import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let boton_ingreso = document.getElementById('boton_ingreso');
let modalregistro=new bootstrap.Modal(document.getElementById('mensaje_info'));
let textoModal=document.getElementById('mensaje_modal_info');

boton_ingreso.addEventListener('click', function(evento){
    evento.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;

    textoModal.textContent = "Ingreso realizado con exito";
    modalregistro.show();
    setTimeout(function(){
      modalregistro.hide();
      window.location.href = "./index.html"
    }, 1500)

    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

      textoModal.textContent = "La cagamos D: :" + errorMessage;
      modalregistro.show();
      setTimeout(function(){
        modalregistro.hide();
      }, 1500)
  });


})


