import { makeAutoObservable } from "mobx";
import MainService from "../config/service";
import {  AxiosResponse } from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";

export default class UserStore {
    public status: string = "";
    public statusCode: number = 0;
    public token: string = localStorage.getItem('token') || '';
    public role: string = localStorage.getItem('role') || '';

    constructor() {
        makeAutoObservable(this);
    }

    public async register(data: object) {
        try {
            const response: AxiosResponse = await MainService.post<object>('/api/users/create', data);
            this.status = response.data.msg;
            this.statusCode = response.status;
        } catch (err) {
            console.log(err);
        }
    }

    public async login(data: object) {
            const response: AxiosResponse = await MainService.post<object>('/api/users/login', data);
            const decoded = jwtDecode<JwtPayload>(response.data.token);
            this.setAuth(response.data.token,decoded.role);
    }
    public async logout(){
        this.removeAuth();
    }

    private setAuth(token:string,role:string) {
        this.token = token;
        this.role = role;
        localStorage.setItem('token',token);
        localStorage.setItem('role',role);
    }

    private removeAuth() {
        this.token = '';
        this.role = '';
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }
}