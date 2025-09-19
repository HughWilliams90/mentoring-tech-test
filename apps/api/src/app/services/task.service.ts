import {dependency} from '@foal/core';
import {TaskRepository, Task} from '@mentoring/domain';

export class TaskService {
    @dependency
    taskRepository!: TaskRepository

    async getTasks(): Promise<Task[]> {
        return this.taskRepository.getTasks();
    }

    async completeTask(taskId: number) {
        return this.taskRepository.completeTask(taskId);
    }
}