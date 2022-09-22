import { Router } from "express";

// CONTROLLERS IMPORTS
import createUserController from '../controllers/createUser.controller';
import deleteUserController from '../controllers/deleteUser.controller';
import listUserController from '../controllers/listUser.controller';
import updateUserController from '../controllers/updateUser.controller';
import userLoginController from "../controllers/userLogin.controller";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";

// MIDDLEWARE IMPORTS
import verifyEmailAvailability from "../middlewares/verifyEmailAvailability.middleware";

////////////////////////////////////////////////////////////////
const router =  Router();

router.post('', verifyEmailAvailability, createUserController);
router.get('', listUserController);
router.patch('/:id', verifyAuthToken, updateUserController);
router.delete('/:id', verifyAuthToken, deleteUserController);
router.post('/login', userLoginController);

export default router;