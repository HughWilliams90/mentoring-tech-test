import {Task} from "../entities/task.entity";
import {AppDataSource} from "../data-source";

export class TaskRepository {
    private repository = AppDataSource.getRepository(Task)

    public async getTasks(): Promise<Task[]> {
        return this.repository.find();
    }

    public async completeTask(taskId: number): Promise<void> {

        const task = await this.repository.findOneBy({ id: taskId });
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date() : null;
            await this.repository.save(task);
        }
    }
}