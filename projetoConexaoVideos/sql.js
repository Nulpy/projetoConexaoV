import { neon } from "@neondatabase/serverless";
import 'dotenv/config'


// a URL do banco verm do arquivo .env
export const sql = neon(process.env.DATABASE_URL);