import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const clipId = searchParams.get('id');
  if (!clipId) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  const clientId = process.env.TWITCH_CLIENT_ID!;
  const clientSecret = process.env.TWITCH_CLIENT_SECRET!;

  // 1️⃣ Obtener token
  const tokenResponse = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    { method: 'POST' }
  );
  const tokenData = await tokenResponse.json();

  // 2️⃣ Obtener datos del clip
  const clipResponse = await fetch(`https://api.twitch.tv/helix/clips?id=${clipId}`, {
    headers: {
      'Client-ID': clientId,
      'Authorization': `Bearer ${tokenData.access_token}`,
    },
  });

  const data = await clipResponse.json();
  return NextResponse.json(data);
}
