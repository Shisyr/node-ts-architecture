import Express, {Application} from 'express'
import UserController from "./controllers/user.controller";
import bodyParser from "body-parser";

export default class Server {

  private userController: UserController;
  private readonly app: Application

  constructor() {
    this.app = Express();
    this.configuration();
    this.userController = new UserController();
    this.routes();
  }

  private configuration() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.set('port', process.env.PORT || 3001);
  }

  private routes() {
    this.app.use('/users', this.userController.router);
    this.app.get('/test', (req: Express.Request, res: Express.Response) => {
      res.send({success: true});
    });
  }

  get getApp() {
    return this.app;
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server is running!');
    });
  }
}
