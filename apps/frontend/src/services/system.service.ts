import {HttpService} from "./http.service";


export class SystemService {
    private static healthApi = '/health'
    private static tasksApi = '/tasks'
    private static taskCompleteApi = (taskId: number) => `/tasks/${taskId}`

    public static async getHealth(): Promise<HealthResponse> {
        return HttpService.get<HealthResponse>(this.healthApi);
    }

    public static getTasks(): Promise<Task[]> {
        return HttpService.get<Task[]>(this.tasksApi);
    }

    public static completeTask(taskId: number): Promise<string> {
        return HttpService.post<undefined, string>(this.taskCompleteApi(taskId));
    }
}

export interface HealthResponse {
    version: string;
}

export interface Task {
    id: number,
    taskName: string,
    taskSubtitle?: string,
    taskDescription: string,
    difficulty: string,
    completed: boolean,
    completedAt: string
}