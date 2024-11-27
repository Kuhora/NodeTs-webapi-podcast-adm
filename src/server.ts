import * as http from "http";
import * as dotenv from "dotenv";

dotenv.config();

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {});

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
