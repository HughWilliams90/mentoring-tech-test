import {Context, Get, HttpResponseOK} from '@foal/core';
import {version} from '../../../package.json';


export class ApiController {
  @Get('/health')
  async health(ctx: Context) {
    const data = { version }
    return new HttpResponseOK(data);
  }
}
