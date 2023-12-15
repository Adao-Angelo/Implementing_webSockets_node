import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path"

const app = express();
app.use(express.static(path.join(__dirname , ".."  ,"views" )))
const serverHttp = http.createServer(app);
const wss = new Server(serverHttp);

export { wss , serverHttp };
