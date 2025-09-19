import {Context, dependency, Get, HttpResponseOK, Post} from '@foal/core';
import {TaskHandler} from '../handlers/task.handler';

export class TaskController {
    @dependency
    taskHandler!: TaskHandler

    @Get('/tasks')
    async tasks(ctx: Context) {
        const tasks = await this.taskHandler.getTasks();
        return new HttpResponseOK(tasks);
    }

    @Post('/tasks/:id')
    async taskComplete(ctx: Context) {
        const result = await this.taskHandler.completeTask(ctx.request.params.id);
        return new HttpResponseOK(result);
    }
}