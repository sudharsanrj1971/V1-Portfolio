import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminUsername = process.env.ADMIN_USERNAME || 'Bubu';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Sudharsan@1336';
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@portfolio.local';

  // Check if admin already exists
  const existingAdmin = await prisma.user.findFirst({
    where: { name: adminUsername },
  });

  if (existingAdmin) {
    console.log(`Admin user "${adminUsername}" already exists.`);
    return;
  }

  const passwordHash = await bcrypt.hash(adminPassword, 10);

  await prisma.user.create({
    data: {
      name: adminUsername,
      email: adminEmail,
      passwordHash,
      role: 'ADMIN',
    },
  });

  console.log(`Admin user "${adminUsername}" created successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
