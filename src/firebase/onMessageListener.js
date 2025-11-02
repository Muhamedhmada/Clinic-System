import { onMessage } from "firebase/messaging";
import { messaging } from "./config";

import logo from '../Assets/Images/clinicLogo.png'

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
      console.log("Message received:", payload);
      console.log("best notification forever")
      const { title, body, icon } = payload.notification || {};

      // تحقق إن المستخدم سمح بالإشعارات
      if (Notification.permission === "granted") {
        new Notification(title || "New Message", {
          body: body || "You have a new notification",
          icon: icon || {logo},
          vibrate: [100, 50, 100],// اهتزاز (في الموبايل)
        });
      } else {
        console.warn("Notifications are not allowed by the user.");
      }
    });
  });
