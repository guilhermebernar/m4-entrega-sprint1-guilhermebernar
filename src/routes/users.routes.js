import { Router } from "express";

// CONTROLLERS IMPORTS
import createUserController from '../controllers/createUser.controller';
import deleteUserController from '../controllers/deleteUser.controller';
import listUserController from '../controllers/listUser.controller';
import updateUserController from '../controllers/updateUser.controller';
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";

// MIDDLEWARE IMPORTS
import verifyEmailAvailability from "../middlewares/verifyEmailAvailability.middleware";

////////////////////////////////////////////////////////////////
const router =  Router();

router.post('', verifyEmailAvailability, createUserController);
router.get('', listUserController);

// Protected Routes
const partySecurity = verifyAuthToken;

router.get('/profile/:id', partySecurity,);
router.patch('/:id', partySecurity, updateUserController);
router.delete('/:id', partySecurity, deleteUserController);

export default router;