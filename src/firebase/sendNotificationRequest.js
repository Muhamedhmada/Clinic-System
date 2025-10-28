import { toast } from "react-toastify";

export const sendNotificationRequest = async (userId) => {
  try {
    const response = await fetch("https://YOUR-BACKEND-DOMAIN.com/api/approve-booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Notification sent successfully:", data);
      toast.success("📩 تم إرسال الإشعار بنجاح");
    } else {
      console.error("Error:", data);
      toast.error("❌ حدث خطأ أثناء الإرسال");
    }
  } catch (error) {
    console.error("Network error:", error);
    toast.error("⚠️ فشل الاتصال بالسيرفر");
  }
};
