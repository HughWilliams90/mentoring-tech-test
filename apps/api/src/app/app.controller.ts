import {controller, Hook, IAppController} from '@foal/core';
import {ApiController, DataController, TaskController} from './controllers';

@Hook(() => response => {
  response.setHeader('Access-Control-Allow-Origin', '*');
})
export class AppController implements IAppController {
  subControllers = [
    controller('/api', ApiController),
    controller('/api', TaskController),
    controller('/api', DataController),
  ];
}
