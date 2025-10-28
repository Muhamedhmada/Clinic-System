import base_url from "../config/base_url";

export const sendTokenToBackend = async (userId, token) => {
  console.log(token)
  // return
  try {
    await fetch(`${base_url}/firebase/register-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        token:JSON
      },
    });
    localStorage.setItem("fcmToken", token)
    console.log("Token sent to backend successfully");
  } catch (error) {
    console.error("Error sending token to backend:", error);
  }
};
