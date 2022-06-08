    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyB6F9v59ZE9G8M78CtFOtIKOO5_LT067Xw",
      authDomain: "square-dvp.firebaseapp.com",
      projectId: "square-dvp",
      storageBucket: "square-dvp.appspot.com",
      messagingSenderId: "716208646180",
      appId: "1:716208646180:web:a64fc23ea34fe7b20890b1",
      measurementId: "G-PWQDCYGZJZ"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);