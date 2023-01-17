import Fastify from 'fastify'
import cors from '@fastify/cors'
import {PrismaClient} from '@prisma/client' //accessing the database


const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async() => {
    const habits = await prisma.habit.findMany({

    }) //returning the table habites

    return habits
})




app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})
