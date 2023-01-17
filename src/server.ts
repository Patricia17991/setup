import Fastify from 'fastify'
import {PrismaClient} from '@prisma/client' //accessing the database


const app = Fastify()
const prisma = new PrismaClient()

app.get('/', () => {
    const habits = prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    }) //returning the table habites

    return habits
})




app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})
