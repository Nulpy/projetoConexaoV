import fastify from "fastify";
import cors from "@fastify/cors";
import fatifyStatic, { fastifyStatic } from "@fastify/static";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename__ = fileURLToPath(import.meta.url);
const __dirname__ = dirname(__filename);

const server = fastify();
// Server arquivos estaticos da pasta 'piblic'
await server.register(fastifyStatic, {
    root: join(__dirname, "public"),
    prefix: "/",
});


//configuração do CORS
await server.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

});

//ROTAS
server.post("/videos", async(request, reply) =>{
    const { title, description, duration } = request.body;

    await DatabaseError.create({title, description, duration });

    return reply.status(201).send();

});

server.get("/videos", async(request,reply )=>{

    const search = request.query.search;

    const videos = await database.list(search);

    return videos; //sempre retorna array

})

server.put("/videos/:id ", async(request, reply)=>{

    const videoId = request.params.id;

    const {title, description, duration} = request.body;

    await DatabaseError.update(videoId,{ title, description, duration});

    return replay.status(204).send();

})

server.delete("videos/:id", async (request, reply)=>{

    const videoId = request.params.id;

    await database.delete(videoId);

    return reply.status(204).send();
})

server.list({
    port: process.env.PORT ?? 3333,
}).then(() => console.log("Servidor rodando em http://localhost:3333"));