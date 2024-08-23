import { makeAutoObservable } from "mobx";
import MainService from "../config/service";
export default class TarifStore{
    public status:number = 0;
    public statusMessage:string = '';
    public page:number | any = 1;
    public pages:number | any = 0;
    public limit:number | any = 10;
    public tarifs = [];
    public isOpenDelModal:boolean = false;
    public selectedTarif:string | null = null;
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
    public showDelModal(id:string):void{
        this.selectedTarif = id;
        this.isOpenDelModal = true;
    }
    public closeDelModal():void{
        this.isOpenDelModal = false;
    }
    public async get(data?:object){
        try {
            const response = await MainService.get('/api/tarif/read');
            this.page = response.data.page;
            this.pages = response.data.pages;
            this.tarifs = response.data.tarifs;
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    public async delete(_id:string){
        try {
            const response = await MainService.delete(`/api/tarif/delete/${_id}`);
            this.status = response.status;
            this.statusMessage = response.data.msg;
            if(this.status==200){
                this.tarifs = this.tarifs.filter((el:any)=>el._id!==_id);
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    
}