import type { Message } from "../types/chat";
import { motion } from "framer-motion";

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`px-4 py-3 rounded-lg max-w-xs lg:max-w-md ${
          isUser
            ? "bg-accent text-white rounded-br-none"
            : "glass text-gray-100 rounded-bl-none"
        }`}
      >
        <p className="text-sm md:text-base">{message.content}</p>
      </div>
    </motion.div>
  );
}
