import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBpiJUpdssnNYzCH_26yO-RqJdYmP7Dv5U",
    authDomain: "weather-app-34a70.firebaseapp.com",
    projectId: "weather-app-34a70",
    storageBucket: "weather-app-34a70.appspot.com",
    messagingSenderId: "307012638110",
    appId: "1:307012638110:web:4d6f484ac42bfd94c2b28f",
    measurementId: "G-YCSTTKS9LP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


export {auth, provider};
export default app;
