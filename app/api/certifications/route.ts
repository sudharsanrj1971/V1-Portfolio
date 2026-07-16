import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

const checkAuth = (req: NextRequest) => {
  const token = req.cookies.get('auth_token')?.value;
  if (!token) return false;
  return verifyToken(token) !== null;
};

export async function GET() {
  try {
    const certificates = await prisma.certificate.findMany({
      orderBy: { issueDate: 'desc' }
    });
    return NextResponse.json(certificates);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch certifications' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const data = await req.json();
    const certificate = await prisma.certificate.create({ data });
    return NextResponse.json(certificate, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create certification' }, { status: 500 });
  }
}
