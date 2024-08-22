import HeaderStore from "./headerStore";
import CloudStore from "./cloudStore";
import UserStore from "./userStore";
import TarifStore from "./tarifStore";
export default class RootStore{
    headerStore:HeaderStore;
    cloudStore:CloudStore;
    userStore:UserStore;
    tarifStore:TarifStore;
    constructor(){
        this.headerStore = new HeaderStore();
        this.cloudStore = new CloudStore();
        this.userStore = new UserStore();
        this.tarifStore = new TarifStore();
    }
}