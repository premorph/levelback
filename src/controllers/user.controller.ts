import {  Router } from "express";
import { UserService } from "../services";
import { ValidatorCreateUser } from "../validators/user.validator";

const router:Router=Router()

router.get("/",new UserService().GetUsers)
router.get("/:_id",new UserService().GetUser)
router.post('/', ValidatorCreateUser,new UserService().CreateUser  )
export {router}