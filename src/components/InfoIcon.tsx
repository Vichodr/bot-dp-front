import React, { useState } from "react";

export default function InfoIcon() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Ícono flotante */}
      <div
        onClick={handleOpenModal}
        className="fixed top-4 right-4 bg-blue-500 text-white rounded-full p-2 cursor-pointer hover:bg-blue-600 transition"
        title="Información del bot"
      >
        <img src="/information.svg" alt="Información" className="h-6 w-6" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }} // Fondo negro con transparencia
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-180 relative">
            {/* Botón de cierre */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            {/* Contenido del modal */}
            <h2 className="text-xl font-bold mb-4">🧠 Información del BOT</h2>
            <p className="text-gray-700 mb-4">
              Este BOT ha sido desarrollado como parte del proyecto de la asignatura Dirección de Proyectos. Su propósito es ofrecer una experiencia interactiva de consulta mediante el uso de procesamiento de lenguaje natural (NLP) y consultas a servicios externos.
            </p>
            <h3 className="text-lg font-semibold mb-2">🔍 ¿Qué puedes preguntarle al BOT?</h3>
            <p className="text-gray-700 mb-4">
              Puedes hacer consultas relacionadas con los siguientes temas:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>🌤️ <strong>Clima:</strong> por ejemplo, “¿Cuál es el clima hoy?” o “Dame el pronóstico del tiempo”.</li>
              <li>💰 <strong>Valor de la UF:</strong> por ejemplo, “¿Cuál es el valor actual de la UF?”.</li>
              <li>💵 <strong>Valor del dólar:</strong> por ejemplo, “¿A cuánto está el dólar hoy?”.</li>
              <li>📰 <strong>Noticias del día:</strong> por ejemplo, “Muéstrame las noticias” o “Últimas noticias”.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">⚠️ Importante:</h3>
            <p className="text-gray-700 mb-4">
              Este BOT no responde preguntas fuera de esos temas. Si haces preguntas sobre otro contenido (como deportes, música, recetas, etc.), no podrá entender la instrucción.
            </p>
            <h3 className="text-lg font-semibold mb-2">🧑‍💻 Modo de uso:</h3>
            <p className="text-gray-700">
              Simplemente escribe tu consulta en el cuadro de texto como si hablaras con una persona, y el BOT procesará tu mensaje para entregarte la información solicitada.
            </p>
          </div>
        </div>
      )}
    </>
  );
}