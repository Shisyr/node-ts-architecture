import {Router, Response, Request} from 'express';
import UserService from "../services/UserService/User.Service";
import Services, {SERVICES_ENUMS} from "../services";
import StatusCodes from "../common/status.codes";

class UserController {
  router: Router
  constructor() {
    this.router = Router();
    this.routes();
  }

  public async create(req: Request, res: Response) {
    const userService = Services.getServiceBy(SERVICES_ENUMS.USER);
    const response = await userService.createUser(req.body);
    res.status(StatusCodes.CREATED).json(response);
  }

  public async update(req: Request, res: Response) {
    const userService = Services.getServiceBy(SERVICES_ENUMS.USER);
    const userId: number = Number(req.params['id']);
    const response = await userService.updateUser(userId, req.body);
    res.status(StatusCodes.ACCEPTED).json(response);
  }

  public async findAll(req: Request, res: Response) {
    const userService = Services.getServiceBy(SERVICES_ENUMS.USER);
    const listUsers = await userService.getUsers(req.body);
    res.status(StatusCodes.ACCEPTED).json(listUsers);
  };

  tryCatch = (func: Function) => async (req: Request, res: Response) => {
    try {
      await func(req, res);
    } catch (e) {
      res.status(e.status || StatusCodes.SERVER_ERROR).json({message: e.message, errors: e.errors});
    }
    res.send();
  }

  private routes() {
    this.router.post('/', this.tryCatch(this.create));
    this.router.put('/:id', this.tryCatch(this.update));
    this.router.post('/findAll', this.tryCatch(this.findAll));
  }
}

export default UserController;
