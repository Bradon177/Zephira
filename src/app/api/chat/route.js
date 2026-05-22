import { NextResponse } from 'next/server';

export async function POST(request) {
  const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

  console.log('API Route Request (POST to n8n)');

  if (!n8nWebhookUrl) {
    return NextResponse.json(
      { error: 'N8N Webhook URL is not configured' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { message, sessionId } = body;

    const response = await fetch(n8nWebhookUrl, {
      method: 'POST', // Cambiado de GET a POST según tu nueva configuración de n8n
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, sessionId }),
    });

    console.log('n8n response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('n8n error response:', errorText);
      return NextResponse.json(
        { error: `Error from n8n service: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('n8n success response data:', JSON.stringify(data, null, 2));
    return NextResponse.json(data);
  } catch (error) {
    console.error('Detailed API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}
