import { makeAutoObservable } from "mobx";
import MainService from "../config/service";
export default class TarifStore{
    public status:number = 0;
    public statusMessage:string = '';
    constructor(){
        makeAutoObservable(this);
    }
    public async create(data:object){
        try {
            const response = await MainService.post('/api/tarif/create',data);
            this.status = response.status;
            this.statusMessage = response.data.msg;
        } catch (error) {
            console.log('Cl');
        }
    }
    
}