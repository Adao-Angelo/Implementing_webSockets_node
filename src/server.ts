import { app, serverHttp } from "./http";
import "./websocket"
const port = 2500;
serverHttp.listen(port, () => console.log(`server run at http://localhost:${port}`));


app.listen(2000)

app.get('/', (req, res) => {
    res.render('index');
});