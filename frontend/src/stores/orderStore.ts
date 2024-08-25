import MainService from "../config/service";
import { makeAutoObservable } from "mobx";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { AxiosResponse } from "axios";

export default class OrderStore {
    public statusCode: number = 0;
    public statusMessage: string = '';
    public token: string = localStorage.getItem('token') || '';
    public orders = [];
    constructor() {
        makeAutoObservable(this);
    }

    public async create(data: any) {
        try {
            const decoded = jwtDecode<JwtPayload>(this.token);
            data.user = decoded._id;
            const response = await MainService.post('/api/orders/create', data);
            this.statusCode = response.status;
            this.statusMessage = response.data.msg;
        } catch (error) {
            console.error("Error creating order:", error);
            this.statusCode = 500;
            this.statusMessage = "Failed to create order";
        }
    }
    public async getMyOrders(){
        try {
            const decoded = jwtDecode<JwtPayload>(this.token);
            const response:AxiosResponse = await MainService.get(`/api/orders/myorders?user=${decoded._id}`);
            this.orders = response.data.myorders;
        } catch (error) {
            console.log(error);
        }
    }
    public async get() {
        try {
            const response = await MainService.get('/api/orders');
            console.log("Orders retrieved:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error retrieving orders:", error);
            this.statusCode = 500;
            this.statusMessage = "Failed to retrieve orders";
        }
    }
}