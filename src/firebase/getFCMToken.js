import { getToken } from "firebase/messaging";
import { messaging } from "./config";

export const getFCMToken = async () => {
  console.log("welocome to get fcm token")
  try {
    const token = await getToken(messaging, {
      vapidKey: "BBE66bJHkbLkLrqMSptWkMgOq5IGYZWZQ_H-EWhPVdkPG2rrEm7vNbgcHuFNAcDrXakIV5XEqCI2KLj-lL7_Z-8",
    });
    if (token) {
      console.log("FCM Token:", token);
      return token;
    } else {
      console.log("No registration token available.");
      return null;
    }
  } catch (err) {
    console.error("Error retrieving token: ", err);
    return null;
  }
};
