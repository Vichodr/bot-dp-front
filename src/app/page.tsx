// filepath: c:\Users\vmarq\Desktop\BOT DP\bot-dp-front\src\app\page.tsx
"use client";

import { useState } from "react";
import InfoIcon from "@/components/InfoIcon"; // Asegúrate de que la ruta sea correcta

export default function Home() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();

      const botMessage = { sender: "bot", text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error al conectar con el servidor." },
      ]);
    }

    setInput("");
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-between p-4">
      <InfoIcon /> {/* Aquí se incluye el componente del ícono */}
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg flex flex-col p-4 h-[90vh]">
        <div className="flex-1 overflow-y-auto space-y-2 mb-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-center space-x-2 p-2 rounded-md max-w-[100%] ${
                msg.sender === "user" ? "bg-blue-100 self-start" : "bg-gray-200 self-start"
              }`}
            >
              <img
                src={msg.sender === "user" ? "/user.svg" : "/bot.svg"}
                alt={msg.sender === "user" ? "User Icon" : "Bot Icon"}
                className="h-6 w-6"
              />
              <span
                style={{
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  whiteSpace: "pre-wrap",
                  maxWidth: "92%",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe una pregunta..."
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            className={`bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Esperando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
}