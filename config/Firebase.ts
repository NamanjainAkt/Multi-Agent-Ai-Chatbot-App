// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Note: Firebase Analytics is not supported in React Native
// Use @react-native-firebase/analytics for React Native instead

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXetWQFeoX3bFx9iHx1FH_l3i8XZ_FG54",
    authDomain: "xoxo-1f865.firebaseapp.com",
    projectId: "xoxo-1f865",
    storageBucket: "xoxo-1f865.firebasestorage.app",
    messagingSenderId: "142933296160",
    appId: "1:142933296160:web:ea111c05baf3464e03a845",
    measurementId: "G-HJR682QMZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireStoreDB = getFirestore(app);