import { NextResponse } from 'next/server';

// Dify API documentation: https://docs.dify.ai/api-reference/chat-messages
const DIFY_API_URL = 'https://api.dify.ai/v1';

export async function POST(request) {
  const difyApiKey = process.env.DIFY_API_KEY;

  console.log('API Route Request (POST to Dify)');

  if (!difyApiKey) {
    return NextResponse.json(
      { error: 'Dify API Key is not configured' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { message, sessionId } = body;

    // Preparamos el payload según la documentación de Dify
    const payload = {
      inputs: {},
      query: message,
      response_mode: "blocking",
      conversation_id: "", // Debe estar presente pero vacío para la primera solicitud
      user: sessionId,
      files: []
    };

    const response = await fetch(`${DIFY_API_URL}/chat-messages`, {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${difyApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('Dify response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Dify error response:', errorText);
      return NextResponse.json(
        { error: `Error from Dify service: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Dify success response data:', JSON.stringify(data, null, 2));
    return NextResponse.json(data);
  } catch (error) {
    console.error('Detailed API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}
