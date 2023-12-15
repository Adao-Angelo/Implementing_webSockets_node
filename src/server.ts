import express, { Application } from "express";
import http from "http"
import { Server } from "socket.io";


class App {
    private app:Application;
    private http: http.Server;
    private io: Server;
    constructor(){
        this.app = express()
        this.http = http.createServer(this.app)
        this.io = new Server(this.http)
      
        this.listenSocket() 
        this.setUpRoutes()
    }
    listenServer(){
        this.http.listen(3000 ,() => console.log("server runimg"))
    }
    listenSocket(){
        console.log()
        this.io.on("connection", (socket)=>{
            console.log("user socket: ", socket.id)
        })
    }
    setUpRoutes(){
        this.app.get("/", (req , res)=>{
            res.sendFile(__dirname+"/index.html")
        })
    }
}


const app = new App()
app.listenServer()
