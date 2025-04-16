import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
const prisma = new PrismaClient()

const userSchema = z.object({
    id: z.number({
        invalid_type_error: "O id deve ser um número!",
        required_error: "O id é obrigatório!" }),
    
    name: z.string({
        invalid_type_error: "O nome deve ser uma string!",
        required_error: "O nome é obrigatório!" 
    })
        .min(3, {message: "O nome deve ter no mínimo 3 caracteres!"})
        .max(255, {message: "O nome deve ter no máximo 255 caracteres!"}),

    email: z.string({
        invalid_type_error: "O e-mail deve ser uma string!",
        required_error: "O e-mail é obrigatório!" 
    })
        .email({message: "O e-mail deve ser válido!"}),

    pass: z.string({
        invalid_type_error: "A senha deve ser uma string!",
        required_error: "A senha é obrigatória!" 
    })
        .min(8, {message: "A senha deve ter no mínimo 8 caracteres!"})
        .max(255, {message: "A senha deve ter no máximo 255 caracteres!"}),
        
    avatar: z.string({
        invalid_type_error: "A URL do avatar deve ser uma string!",
        required_error: "A URL do avatar é obrigatória!" 
    })
        .url({message: "URL do avatar inválida!"})
        .optional()
})

export const userValidator = (user, partial = null) => {
    if (partial) {
        return userSchema.partial().safeParse(user)
    }

    return userSchema.safeParse(user)
}

export async function create(user){
    const result = await prisma.user.create({
        data: user
    })
    return result
}

export async function list() {
    const result = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true, 
            avatar: true
        }
    })
    return result
}

export async function getById(id){
    const result = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })

    return result
}

export async function remove(id){
    const result = await prisma.user.delete({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })

    return result
}

export async function update(id, user){
    const result = await prisma.user.update({
        where: {
            id: id
        },
        data: user,

        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
    
    return result
}

export async function updateName(id, name){
    const result = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            name: name
        },
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
    
    return result
}