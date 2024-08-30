import { makeAutoObservable } from "mobx";

export default class CloudStore{
    public isOpenModal:boolean = false;
    public clouds = [];
    public token = localStorage.getItem('token') || "";

    constructor(){
        makeAutoObservable(this);
    }
    public showModal = () =>{
        this.isOpenModal = true;
    }
    public closeModal = ()=>{
        this.isOpenModal = false;
    }
    public async create(){

    }
    public async getCloud(){

    }
    public async delete(){
        
    }
}