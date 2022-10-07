import { Router } from "express";

// CONTROLLERS IMPORTS
import createUserController from '../controllers/createUser.controller';
import deleteUserController from '../controllers/deleteUser.controller';
import listUserController from '../controllers/listUser.controller';
import updateUserController from '../controllers/updateUser.controller';
import checkUserController from "../controllers/checkProfile.controller";

// MIDDLEWARES IMPORTS
import verifyAdmAccess from "../middlewares/verifyAdmAccess.middleware";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";

////////////////////////////////////////////////////////////////
const router =  Router();

router.post('', createUserController);

// Protected Routes
const partySecurity = verifyAuthToken;
const vipSecurity = verifyAdmAccess;

router.get('', partySecurity, listUserController);
router.get('/profile', partySecurity, checkUserController);
router.patch('/:uuid', partySecurity, vipSecurity, updateUserController);
router.delete('/:uuid', partySecurity, vipSecurity, deleteUserController);

export default router;