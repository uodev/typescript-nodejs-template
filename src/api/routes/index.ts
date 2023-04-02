import { Router,Request,Response } from "express";
import { errorWrapper } from "../middlewares/errors/errorHandling";

const router = Router();

router.get("/", errorWrapper((req:Request, res:Response) => {
    res.send("Hello express with Typescript");
    }));

export default router;