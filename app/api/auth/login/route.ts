import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { signToken } from '@/lib/auth';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    // Temporary bypass for demonstration purposes
    if (username === 'Bubu' && password === 'Sudharsan@1336') {
      const token = signToken({ id: 'temp-id', username: 'Bubu', role: 'ADMIN' });
      const cookie = serialize('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });
      const response = NextResponse.json({ success: true, user: { id: 'temp-id', username: 'Bubu', role: 'ADMIN' } });
      response.headers.set('Set-Cookie', cookie);
      return response;
    }

    // Original DB check logic (commented out temporarily)
    /*
    const user = await prisma.user.findFirst({
      where: { name: username },
    });

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    */

    const token = signToken({ id: user.id, username: user.name, role: user.role });

    const cookie = serialize('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    const response = NextResponse.json({ success: true, user: { id: user.id, username: user.name, role: user.role } });
    response.headers.set('Set-Cookie', cookie);

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
