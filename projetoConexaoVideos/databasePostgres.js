import { randomUUID } from "mode:crypto";
import { sql } from "./sql.js";

export class DatabasePostgress{
    async list(search){
        let result;

        if(search){
            result = await sql`SELECT * FROM videos WHERE title
            ILIKE ${'%' + search + '%' }`;

        }else{
            result =  await sql`SELECT * FROM videos`;

        }
        //garante que sempre retorna array
        return Array.isArray(result) ? result : result.rows || []
    }
    async create(video){
        const videoId = randomUUID()
        const {title, description, duration} = video;

        await sql`
        INSERT INTO videos(id, title, descroption, duration)
        VALUES($(videosID), $(title), $(description), $(duration))
        `;
    }
    async update(id, video){
        const { title, description, duration} = video;

        await sql`
            UPDATE videos
            SET title = $(title), description = ${description}, duration = ${duration}
            WHERE ID = $(id)

        `;
    }

    async delete(id){
        await sql`DELETE FROM videos WHERE id = ${id}`;
    }


}