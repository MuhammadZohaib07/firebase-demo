importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js');

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
  firebase.messaging();