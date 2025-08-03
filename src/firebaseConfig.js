// src/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTKk45FMy6sGdeErxwTfx8gP_Upz1oqKY",
  authDomain: "bybit-balance-view.firebaseapp.com",
  projectId: "bybit-balance-view",
  storageBucket: "bybit-balance-view.firebasestorage.app",
  messagingSenderId: "701023944234",
  appId: "1:701023944234:web:fc234862537d441eae0d53"
};

export const firebaseApp = initializeApp(firebaseConfig);

