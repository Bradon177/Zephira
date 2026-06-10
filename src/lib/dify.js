/**
 * Servicio para interactuar con el agente de IA de Dify
 */

export const sendMessageToDify = async (message, sessionId) => {
  try {
    // Llamamos a nuestra propia API interna para evitar CORS
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        sessionId: sessionId,
        timestamp: new Date().toISOString(),
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch (e) {
      data = null;
    }

    if (!response.ok) {
      console.error('API Route failed:', response.status, data);
      throw new Error(data?.error || data?.message || `Error del servidor (${response.status})`);
    }

    // Estructura de respuesta de Dify: https://docs.dify.ai/api-reference/chat-messages
    return data.answer || data.message || "Lo siento, no pude procesar tu mensaje.";
  } catch (error) {
    console.error('Error en Dify client service:', error);
    throw error;
  }
};
