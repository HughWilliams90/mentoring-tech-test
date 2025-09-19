import {Context, dependency, Get, HttpResponseOK} from '@foal/core';
import data from '../mock-json/weight-trend.json';
import {DataHandler} from '../handlers/data.handler';

export class DataController {
    @dependency
    DataHandler!: DataHandler;

    @Get('/data1')
    async data1(ctx: Context) {
        return new HttpResponseOK(data);
    }

    @Get('/data2')
    async data2(ctx: Context) {
        const data = await this.DataHandler.getData();
        return new HttpResponseOK(data);
    }
}