import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { before } from "node:test";

const usersRouter = Router()

usersRouter.get("/users", (req: Request, res: Response, next: NextFunction)=>{
    const users = [{username: "Victor",}];
    res.status(StatusCodes.OK).json(users);

})

usersRouter.get("/users/:uuid",(req: Request<{ uuid: String }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid
    //BancoDeDados.getUserByUuid(uuid)
    res.status(StatusCodes.OK).send({uuid})
})

usersRouter.post("/users",(req: Request<{ uuid: String }>, res: Response, next: NextFunction)=>{
    const newUser = req.body

    res.status(StatusCodes.CREATED).send(newUser)
})

usersRouter.put("/users/:uuid",(req: Request<{ uuid: String }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedUser = req.body

    modifiedUser.uuid = uuid

    res.status(StatusCodes.OK).send( modifiedUser )
} )

usersRouter.delete("/users/:uuid",(req: Request<{ uuid: String }>, res: Response, next: NextFunction)=>{
    res.sendStatus(StatusCodes.OK)
})

export default usersRouter;

