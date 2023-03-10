import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/user.repository";

const usersRouter = Router()

usersRouter.get("/users", async (req: Request, res: Response, next: NextFunction)=>{
    const users = await userRepository.findAllUser();
    res.status(StatusCodes.OK).json(users);

})

usersRouter.get("/users/:uuid", async (req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const user = await userRepository.findByID(uuid);
    res.status(StatusCodes.OK).send(user);
})

usersRouter.post("/users", async (req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const newUser = req.body
    const uuid = await userRepository.CreateUser(newUser)

    res.status(StatusCodes.CREATED).send(uuid)
})

usersRouter.put("/users/:uuid",async (req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedUser = req.body

    modifiedUser.uuid = uuid

    await userRepository.updateUser(modifiedUser)

    res.status(StatusCodes.OK).send( )
} )

usersRouter.delete("/users/:uuid", async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await userRepository.removeUser(uuid)
    res.sendStatus(StatusCodes.OK)
})

export default usersRouter;

