import express, {Request, Response} from "express"
import {router} from "./routes/routes";

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("", router);

app.listen(8080, () => {
    console.log("Server is rocking at 8080");
});

