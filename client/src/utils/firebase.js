import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWr3HwJsgrv12qMnwTCGyiTL4tHZNFj-g",
  authDomain: "task-manager-6adef.firebaseapp.com",
  projectId: "task-manager-6adef",
  storageBucket: "task-manager-6adef.appspot.com",
  messagingSenderId: "80175770383",
  appId: "1:80175770383:web:bb2af867fddf953785ac7a",
  measurementId: "G-GDZ3R2PT4P"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
