import { onMessage } from "firebase/messaging";
import { messaging } from "./config";

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
