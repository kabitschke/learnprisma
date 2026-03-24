import {prisma} from "../lib/prisma"

type CreateUserProps = {
    name:string;
    email: string;
}

export const createUser = async ({name, email}:CreateUserProps) => {
    try{
    const user = await prisma.user.create({
        data: {
            name, email
        }
    });
    return user;
    } catch (error){
        return false;
    }
}