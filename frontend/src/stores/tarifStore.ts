import { makeAutoObservable } from "mobx";
import MainService from "../config/service";
import { AxiosResponse } from "axios";

export default class TarifStore{
    public status:number = 0;
    public statusMessage:string = '';
    public page:number = 1;
    public pages:number = 0;
    public limit:number = 10;
    public tarifs = [];
    public isOpenDelModal:boolean = false;
    public isOpenEditModal:boolean = false;
    public selectedTarif:string | null = null;
    constructor(){
        makeAutoObservable(this);
    }
    public async create(data:object){
        try {
            const response:AxiosResponse = await MainService.post('/api/tarif/create',data);
            this.status = response.status;
            this.statusMessage = response.data.msg;
        } catch (error) {
            console.log('Cl');
        }
    }
    public showEditModal(id:string):void{
        this.selectedTarif = id;
        this.isOpenEditModal = true;
    }
    public closeEditModal(){
        this.selectedTarif = '';
        this.isOpenEditModal = false;
    }
    public showDelModal(id:string):void{
        this.selectedTarif = id;
        this.isOpenDelModal = true;
    }
    public closeDelModal():void{
        this.isOpenDelModal = false;
    }
    public async get(){
        try {
            const response:AxiosResponse = await MainService.get('/api/tarif/read');
            this.page = response.data.page;
            this.pages = response.data.pages;
            this.tarifs = response.data.tarifs;
        } catch (error) {
            console.log(error);
        }
    }
    public async update(data:object){
        try {
            const response = await MainService.put(`/api/tarif/update/${this.selectedTarif}`,data);
            this.status = response.status;
            if(this.status>=200){
                this.closeEditModal();
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    public async delete(_id:string){
        try {
            const response:AxiosResponse = await MainService.delete(`/api/tarif/delete/${_id}`);
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