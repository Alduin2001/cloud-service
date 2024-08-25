import axios, { AxiosResponse } from "axios";
type Method = 'get' | 'post' | 'put' | 'delete';

export default class MainService {
    private static async request<T>(method: Method, url: string, data?: T, token?: string): Promise<AxiosResponse<T>> {
        try {
            const headers = token ? { Authorization: `Bearer ${token}` } : {};
            const response: AxiosResponse<T> = await axios({
                method,
                url,
                data,
                headers,
            });
            return response;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const errorMessage = err?.response?.data.msg || err.message;
                throw new Error(errorMessage);
            }
        }
    }

    public static async get<T>(url: string, token?: string): Promise<AxiosResponse<T>> {
        return this.request<T>('get', url,undefined, token);
    }
    public static async post<T>(url: string, data: T): Promise<AxiosResponse<T>> {
        return this.request('post', url, data);
    }

    public static async put<T>(url: string, data: T, token?: string): Promise<AxiosResponse<T>> {
        return this.request('put', url, data, token);
    }

    public static async delete(url: string, token?: string): Promise<AxiosResponse<void>> {
        return this.request('delete', url, undefined, token);
    }
}