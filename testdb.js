const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const p = await prisma.product.findFirst();
  console.log(JSON.stringify(p, null, 2));
}

check().finally(() => prisma.$disconnect());
