import { makeAutoObservable } from "mobx";

export default class CloudStore{
    public isOpenModal:boolean = false;

    constructor(){
        makeAutoObservable(this);
    }
    public showModal = () =>{
        this.isOpenModal = true;
    }
    public closeModal = ()=>{
        this.isOpenModal = false;
    }
}