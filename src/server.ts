import { serverHttp } from "./http";

const port = 2500;
serverHttp.listen(port, () => console.log(`server run at http://localhost:${port}`));


