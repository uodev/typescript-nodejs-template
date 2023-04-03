import { Router,Request,Response } from "express";
import { errorWrapper } from "../middlewares/errors/errorHandling";
import route from "./example/example.route"
const router = Router();

router.use("/auth", route)

export default router;