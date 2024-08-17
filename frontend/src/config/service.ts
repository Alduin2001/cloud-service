import axios from "axios";

type Method = 'get' | 'post' | 'put' | 'delete';

export default class MainService {
    private static async request<T>(method: Method, url: string, data?: T, token?: string): Promise<any> {
        try {
            const headers = token ? { Authorization: `Bearer ${token}` } : {};
            const response = await axios({
                method,
                url,
                data,
                headers,
            });
            return response;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                throw new Error(err.response?.data?.message || err.message);
            } else {
                throw new Error('An unexpected error occurred');
            }
        }
    }

    public static async get<T>(url: string, token?: string): Promise<T> {
        return this.request('get', url, undefined, token);
    }

    public static async post<T>(url: string, data: T, token?: string): Promise<T> {
        const response = await this.request('post', url, data);
        return response;
    }

    public static async put<T>(url: string, data: T, token?: string): Promise<T> {
        return this.request('put', url, data, token);
    }

    public static async delete(url: string, token?: string): Promise<void> {
        return this.request('delete', url, undefined, token);
    }
}