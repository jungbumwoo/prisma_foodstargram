import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });
console.log(__dirname);
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import logger from "morgan";
import { sendSecretMail } from "./utils";

const PORT = process.env.port || 4000;

console.log(process.env.port);

const server = new GraphQLServer({ schema });


sendSecretMail("jungbumwoo@naver.com", "4885");


server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
    console.log(`✅ Server running on http://localhost:${PORT}`)
);

