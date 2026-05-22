/**
 * Servicio para interactuar con el agente de IA a través de nuestra API interna
 * para evitar problemas de CORS.
 */

export const sendMessageToN8n = async (message, sessionId) => {
  try {
    // Llamamos a nuestra propia API interna en lugar de n8n directamente
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

    // Intentamos obtener los datos de la respuesta (sea éxito o error)
    let data;
    try {
      data = await response.json();
    } catch (e) {
      data = null;
    }

    if (!response.ok) {
      console.error('API Route failed:', response.status, data);
      
      // Si n8n devuelve un error 404, suele ser porque el workflow no está activo
      if (response.status === 404) {
        throw new Error('El agente no está activo en n8n. Por favor, activa el workflow (interruptor Active).');
      }
      
      throw new Error(data?.error || data?.message || `Error del servidor (${response.status})`);
    }

    // n8n suele devolver un array o un objeto dependiendo de la configuración
    const result = Array.isArray(data) ? data[0] : data;
    
    return result.output || result.text || result.response || "Lo siento, no pude procesar tu mensaje.";
  } catch (error) {
    console.error('Error en n8n client service:', error);
    throw error;
  }
};
