import {Request, Response} from 'express';
import Server from './server';
import {Connection, createConnection} from "typeorm";
const configuration = require('../ormconfig');

createConnection(configuration).then((connection: Connection) => {
  const server = new Server();
  const myLogger = function (req: Request, res: Response, next: () => void) {
    next();
  };

  server.getApp.use(myLogger);

  try {
    server.start();
  } catch (e) {
    console.log('Error during run application: ', e);
  }
});
