import axios, {AxiosResponse} from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 1000,
});

export class HttpService {
    public static async get<T>(url: string): Promise<T> {
        return axiosInstance.get(url).then(response => response.data);
    }

    public static async post<P, T>(url: string, payload?: P): Promise<T> {
        return axiosInstance.post(url, payload).then(response => response.data);
    }

    public static async put<P, T>(url: string, payload: P): Promise<AxiosResponse<T>>  {
        return axiosInstance.put(url, payload).then(response => response.data);
    }

    public static async delete<T>(url: string): Promise<AxiosResponse<T>>  {
        return axios.delete(url).then(response => response.data);
    }
}
