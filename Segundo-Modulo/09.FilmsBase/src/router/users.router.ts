import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";
import createDebug from 'debug';
import { AuthInterceptor } from "../middleware/auth.interceptor.js";



const debug = createDebug('users:router:users');



export const createUsersRouter = (
    usersController: UsersController,) =>{
    debug('Configurando router de users');
    const usersRouter = Router();
    usersRouter.get('/:id', 
        AuthInterceptor.authenticate,
        AuthInterceptor.hasRole(Role.ADMIN),
        usersController.getById;
    );
    //las primeras no pueden estar protegidas porque si no no puedes loguearte
    usersRouter.post('/login', usersController.login);
    usersRouter.post('/create', usersController.create);
    
    // usersRouter.get('/', usersController.getAll);
    // usersRouter.get('/:id', usersController.getById);
    // usersRouter.patch('/:id', usersController.update);
    // usersRouter.delete('/:id', usersController.delete);
    return usersRouter;
    }

