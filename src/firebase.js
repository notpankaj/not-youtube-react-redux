import firebase from 'firebase/app'
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAUwGpAl4LdPIBGkxlEpHIwWffwKN4Ho2A",
  authDomain: "test-c4eb0.firebaseapp.com",
  projectId: "test-c4eb0",
  storageBucket: "test-c4eb0.appspot.com",
  messagingSenderId: "378531626054",
  appId: "1:378531626054:web:1833062bc6942c33ad5e47",
  measurementId: "G-1W41S5178B"
};

firebase.initializeApp(firebaseConfig)
export default firebase.auth()

