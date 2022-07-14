import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCuKfQtombkMfqArPyaoQUHatPHUN7L-Rg",
    authDomain: "bouncer-store.firebaseapp.com",
    projectId: "bouncer-store",
    storageBucket: "bouncer-store.appspot.com",
    messagingSenderId: "361381712033",
    appId: "1:361381712033:web:11fa8c3acc917261dde0e0"
  };

  const app = initializeApp(firebaseConfig);

  export const firebase = () => {
    return app
  }