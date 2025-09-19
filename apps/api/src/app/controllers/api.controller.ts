import { DomainService } from '@mentoring/domain';
import {Context, dependency, Get, HttpResponseOK} from '@foal/core';
import { version } from '../../../package.json';


export class ApiController {
  @dependency
  domainService!: DomainService

  @Get('/health')
  async index(ctx: Context) {
    const data = { version }
    return new HttpResponseOK(data);
  }
}
