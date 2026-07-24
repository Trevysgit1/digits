import { NextResponse } from 'next/server';
import { auth } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { error: 'unauthorized' },
      { status: 401 },
    );
  }

  return NextResponse.json({ authenticated: true });
}