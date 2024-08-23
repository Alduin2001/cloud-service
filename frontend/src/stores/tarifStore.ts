import { makeAutoObservable } from "mobx";
import MainService from "../config/service";
export default class TarifStore{
    public status:number = 0;
    public statusMessage:string = '';
    public page:number = 1;
    public pages:number = 0;
    public limit:number = 10;
    public tarifs = [];

    constructor(){
        makeAutoObservable(this);
    }
    public async create(data:object){
        try {
            const response = await MainService.post('/api/tarif/create',data);
            console.log(response);
            this.status = response.status;
            this.statusMessage = response.data.msg;
        } catch (error) {
            console.log('Cl');
        }
    }
    public async get(data?:object){
        try {
            const response = await MainService.get('/api/tarif/read');
            this.page = response.data.page;
            this.pages = response.data.pages;
            this.tarifs = response.data.tarifs;
            
        } catch (error) {
            console.log(error);
        }
    }
    public async delete(id:string){
        try {
            const response = await MainService.delete('/api/tarif/delete');
        } catch (error) {
            
        }
    }
    
}