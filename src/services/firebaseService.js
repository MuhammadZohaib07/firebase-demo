import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAwD7HcyQZl-1jNMee0xf8G1xeaGr-Z8FY",
    authDomain: "notificationapp-d2a9b.firebaseapp.com",
    databaseURL: "https://notificationapp-d2a9b.firebaseio.com",
    projectId: "notificationapp-d2a9b",
    storageBucket: "notificationapp-d2a9b.appspot.com",
    messagingSenderId: "914380584473",
    appId: "1:914380584473:web:16688e3ddccd79eb921c88"
  };

  
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === "granted") {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }

    })
}