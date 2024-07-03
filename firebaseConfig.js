import { initializeApp } from 'firebase/app';
 
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBicNOIcn4_OHkJ8oNI1AXJlbk7A7qJvqo",
  authDomain: "login-form-4d027.firebaseapp.com",
  projectId: "login-form-4d027",
  storageBucket: "login-form-4d027.appspot.com",
  messagingSenderId: "552357761256",
  appId: "1:552357761256:web:b3722dc0af4512bbebf95d"
};
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, provider, signInWithGoogle };
