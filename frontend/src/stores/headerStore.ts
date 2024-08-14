import { makeAutoObservable } from "mobx";

export default class HeaderStore{
    public isAuthModal = false;
    public isRegisterModal = false;

    constructor(){
        makeAutoObservable(this);
    }
    public showAuthModal = ()=>{
        this.isAuthModal = true;
    }
    public closeAuthModal = ()=>{
        this.isAuthModal = false;
    }
    public showRegisterModal = ()=>{
        this.isRegisterModal = true;
    }
    public closeRegisterModal = ()=>{
        this.isRegisterModal = false;
    }
}