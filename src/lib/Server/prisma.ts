// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// const globalForPrisma = global as unknown as { prisma: typeof prisma };

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// export { prisma };

import { PrismaClient } from '../../../prisma/src/generated/prisma/client';
import { POSTGRES_PRISMA_URL } from '$env/static/private';

const prisma = new PrismaClient({
	datasourceUrl: POSTGRES_PRISMA_URL
});

export default prisma;
