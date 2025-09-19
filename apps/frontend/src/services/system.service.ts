import {HttpService} from "./http.service";


export class SystemService {
    private static healthApi = '/health'

    public static async getHealth(): Promise<HealthResponse> {
        return HttpService.get<HealthResponse>(this.healthApi);
    }
}

export interface HealthResponse {
    version: string;
}
