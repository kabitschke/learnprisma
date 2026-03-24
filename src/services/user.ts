import { Prisma } from '../../generated/prisma/client';
import { prisma } from "../lib/prisma"

type CreateUserProps = {
    name: string;
    email: string;
}

export const createUser = async (data: Prisma.UserCreateInput) => {
    try {
        return await prisma.user.create({ data });
    } catch (error) {
        return false;
    }
}

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
    try {
        return await prisma.user.createMany({
            data: users,
            skipDuplicates: true
        });
    } catch (error) {
        return false;

    }
}