import { Router } from "express";

// CONTROLLERS IMPORTS
import createUserController from '../controllers/createUser.controller';
import deleteUserController from '../controllers/deleteUser.controller';
import listUserController from '../controllers/listUser.controller';
import updateUserController from '../controllers/updateUser.controller';
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import checkUserController from "../controllers/checkProfile.controller";

// MIDDLEWARES IMPORTS
import verifyEmailAvailability from "../middlewares/verifyEmailAvailability.middleware";

////////////////////////////////////////////////////////////////
const router =  Router();

router.post('', verifyEmailAvailability, createUserController);

// Protected Routes
const partySecurity = verifyAuthToken;

router.get('', partySecurity, listUserController);
router.get('/profile', partySecurity, checkUserController);
router.patch('/:id', partySecurity, updateUserController);
router.delete('/:id', partySecurity, deleteUserController);

export default router;