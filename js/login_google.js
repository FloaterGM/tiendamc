import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

let modalregistro=new bootstrap.Modal(document.getElementById('mensaje_info'));
let textoModal=document.getElementById('mensaje_modal_info');

let boton_google = document.getElementById('boton_google');
boton_google.addEventListener('click', function(){

    const provider = new GoogleAuthProvider();

    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    textoModal.textContent = "Ingreso exitoso";
   
    modalregistro.show();
    setTimeout(function(){
        modalregistro.hide();
        window.location.href = "./index.html"
    }, 1500)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    textoModal.textContent = "Pailongas :" + errorMessage;
      modalregistro.show();
      setTimeout(function(){
        modalregistro.hide();
      }, 1500)
    // ...
  });
})