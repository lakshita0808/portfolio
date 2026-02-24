import axios from "axios";

const API_URL = "import.meta.env.VITE_API_URL";

export const sendMessage = async (message: string) => {
  const response = await axios.post(`${API_URL}/chat`, { message });
  return response.data.reply;
};
