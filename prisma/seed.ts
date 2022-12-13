import { v4 as uuid } from 'uuid';
import { hash } from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@prisma.io' },
    update: {},
    create: {
      id: uuid(),
      name: 'admin',
      email: 'admin@prisma.io',
      password: await hash('123456', 10),
    },
  });

  const matiusa = await prisma.user.upsert({
    where: { email: 'matiusa@prisma.io' },
    update: {},
    create: {
      id: uuid(),
      name: 'matiusa',
      email: 'matiusa@prisma.io',
      password: await hash('omaia', 10),
    },
  });

  console.log({ admin, matiusa });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
