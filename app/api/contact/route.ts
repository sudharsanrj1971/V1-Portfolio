import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, body } = await req.json();

    if (!name || !email || !subject || !body) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const message = await prisma.message.create({
      data: { name, email, subject, body },
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
