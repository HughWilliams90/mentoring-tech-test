import {dependency} from '@foal/core';
import {TaskService} from '../services/task.service';
import {Difficulty, Task} from '@mentoring/domain';
import {DateTime} from 'luxon'

export class TaskHandler {
    @dependency
    taskService!: TaskService

    async getTasks(): Promise<TaskResponse[]> {
        const tasks = await this.taskService.getTasks();
        return tasks.map(toSeriTask)
    }

    async completeTask(taskId: number): Promise<string> {
        await this.taskService.completeTask(taskId);
        return 'Task toggled';
    }
}

const toSeriTask = (task: Task) => {
    return {...task, difficulty: getDifficulty(task.difficulty), completedAt: task.completedAt ? DateTime.fromJSDate(task.completedAt).toFormat('dd/MM/yyyy') : undefined }
}

const getDifficulty = (difficulty: Difficulty) => {
    switch (difficulty) {
        case Difficulty.VERY_EASY:
            return 'Very easy';
        case Difficulty.EASY:
            return 'Easy';
        case Difficulty.MEDIUM:
            return 'Medium';
        case Difficulty.HARD:
            return 'Hard';
        case Difficulty.VERY_HARD:
            return 'Very hard';
    }
}

export interface TaskResponse {
    taskName: string,
    taskSubtitle?: string,
    taskDescription: string,
    difficulty: string,
    completed: boolean,
    completedAt: string
}