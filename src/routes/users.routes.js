import { Router } from "express";

import createUserController from '../controllers/createUser.controller';
import deleteUserController from '../controllers/deleteUser.controller';
import listUserController from '../controllers/listUser.controller';
import updateUserController from '../controllers/updateUser.controller';

const router =  Router();

router.post('', createUserController);
router.get('', listUserController);
router.patch('/:id', updateUserController)
router.delete('/:id', deleteUserController)

export default router