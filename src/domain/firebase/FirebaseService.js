import Firebase from 'firebase'



const config = {
    apiKey: "AIzaSyBY-eZPJrb8Ws_jc1pWCfEhNhF4VzdgC-Q",
    authDomain: "to-do-list-7eabf.firebaseapp.com",
    databaseURL: "https://to-do-list-7eabf.firebaseio.com",
    projectId: "to-do-list-7eabf",
    storageBucket: "to-do-list-7eabf.appspot.com",
    messagingSenderId: "893610260697"
};


const app = Firebase.initializeApp(config);
const commentsRef  = app.database()


export default commentsRef