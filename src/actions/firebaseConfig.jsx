import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDjxPLS7gSLoUVAcd7gju7gHIYefaxFS6A",
  authDomain: "weather-app-375b5.firebaseapp.com",
  projectId: "weather-app-375b5",
  storageBucket: "weather-app-375b5.appspot.com",
  messagingSenderId: "350073201404",
  appId: "1:350073201404:web:a148fa5c3b7324a6386d79",
  measurementId: "G-117SVT71H7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
