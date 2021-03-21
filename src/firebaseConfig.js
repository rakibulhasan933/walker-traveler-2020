import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAOK97ymQl2pZ8vns4rx63J1Q_UdVNOSGI",
    authDomain: "walker-traveller.firebaseapp.com",
    projectId: "walker-traveller",
    storageBucket: "walker-traveller.appspot.com",
    messagingSenderId: "637177052551",
    appId: "1:637177052551:web:c360b9c0aaa8505202e722"
  }
);

export default app;
