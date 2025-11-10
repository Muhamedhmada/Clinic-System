// firebase-messaging-sw.js
/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBH1jbCzYIm21x8qaMYwUCyFIjjPKq0A-U",
  authDomain: "clinic-system-ca731.firebaseapp.com",
  databaseURL: "https://clinic-system-ca731-default-rtdb.firebaseio.com",
  projectId: "clinic-system-ca731",
  storageBucket: "clinic-system-ca731.firebasestorage.app",
  messagingSenderId: "302330010072",
  appId: "1:302330010072:web:4399654f603dc331bd3aad",
  measurementId: "G-DCQ3FX6GYH",
});

const messaging = firebase.messaging();

// دا بيتعامل مع الإشعار لما يوصل والموقع مش مفتوح أو في الخلفية
messaging.onBackgroundMessage(function(payload) {
  console.log('📩 Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/clinicLogo.png',
    vibrate: [100, 50, 100],// اهتزاز (في الموبايل)
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
