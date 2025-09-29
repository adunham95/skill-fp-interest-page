import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const globalForPrisma = global as unknown as { prisma: typeof prisma };

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;

// import { PrismaClient } from '../../../prisma/src/generated/prisma/client';
// import { DATABASE_URL } from '$env/static/private';

// const prisma = new PrismaClient({
// 	datasourceUrl: DATABASE_URL
// });

// export default prisma;
