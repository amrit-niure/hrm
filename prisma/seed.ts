import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

async function main() {
    const adminUser = await prisma.user.findUnique({
        where: {
            email: "admin@gmail.com"
        }
    });

    if (!adminUser) {
        const hashedPassword = await bcrypt.hash("admin", 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                email: "admin@gmail.com",
                name: "Admin",
                passwordHash: hashedPassword,
                role: "ADMIN",
                emailVerified: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        });

        // Create corresponding account for credential provider
        await prisma.account.create({
            data: {
                id: randomUUID(),
                userId: user.id,
                providerId: "email",
                accountId: user.id,
                password: hashedPassword, // Store password in Account model as well
                createdAt: new Date(),
                updatedAt: new Date()
            }
        });

        console.log("Admin user and account created");
    } else {
        console.log("Admin user already exists");
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });