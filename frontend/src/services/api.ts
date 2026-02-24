import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://portfolio-2d1q.onrender.com";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    throw error;
  }
);

export const sendMessage = async (message: string) => {
  try {
    const response = await axiosInstance.post("/chat", { message });
    return response.data.reply;
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.detail ||
      error?.message ||
      "Failed to get response from AI assistant";
    throw new Error(errorMessage);
  }
};
