import MainService from "../config/service";
import { makeAutoObservable } from "mobx";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { AxiosResponse } from "axios";

export default class OrderStore {
    public statusCode: number = 0;
    public statusMessage: string = '';
    public token: string = localStorage.getItem('token') || '';
    public orders = [];
    public isDeleteModal:boolean = false;
    public selectedID = '';
    constructor() {
        makeAutoObservable(this);
    }
    public showModal(id:string):void{
        this.selectedID = id;
        this.isDeleteModal = true;
    }
    public closeModal():void{
        this.selectedID = '';
        this.isDeleteModal = false;
    }
    public async create(data: any) {
        try {
            const decoded:any = jwtDecode<JwtPayload>(this.token);
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
            const decoded:object = jwtDecode<JwtPayload>(this.token);
            const response:AxiosResponse = await MainService.get(`/api/orders/myorders?user=${decoded._id}`);
            this.orders = response.data.myorders;
        } catch (error) {
            console.log(error);
        }
    }
    public async get() {
        try {
            const response:AxiosResponse = await MainService.get('/api/orders/read');
            this.orders = response.data.orders;
        } catch (error) {
            console.error("Error retrieving orders:", error);
            this.statusCode = 500;
            this.statusMessage = "Failed to retrieve orders";
        }
    }
    public async changeStatus(_id:string,state:object){
        try {
            const response:AxiosResponse = await MainService.put(`/api/orders/change_status/${_id}`,state);
            this.statusCode = response.status;
            this.statusMessage = response.data.msg;
        } catch (error) {
            console.log(error);
        }
    }
    public async deleteOrder(){
        try {
            const response = await MainService.delete(`/api/orders/delete/${this.selectedID}`);
            if(response.status>=200){
                this.closeModal();
            }
            this.orders = this.orders.filter((el:any)=>el._id==this.selectedID);
        } catch (error) {
            console.log(error);
        }
    }
}