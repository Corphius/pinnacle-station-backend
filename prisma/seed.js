// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4: uuid } = require('uuid');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { hash } = require('bcrypt');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client');

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

  const user = await prisma.user.upsert({
    where: { email: 'user@prisma.io' },
    update: {},
    create: {
      id: uuid(),
      name: 'user',
      email: 'user@prisma.io',
      password: await hash('omaia', 10),
    },
  });

  console.log({ admin, user });
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
