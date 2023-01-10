import express, {Request, Response, NextFunction } from "express"
import errorHandler from "./middleware/error-handler.middleware";
import statusRouter from "./routes/status.route";
import usersRouter from "./routes/users.route";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(usersRouter)
app.use(statusRouter)

app.use(errorHandler)

app.listen(3000, () => {
    console.log("Excecução na porta 3000!")
})