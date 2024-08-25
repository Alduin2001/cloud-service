import HeaderStore from "./headerStore";
import CloudStore from "./cloudStore";
import UserStore from "./userStore";
import TarifStore from "./tarifStore";
import OrderStore from "./orderStore";
export default class RootStore{
    headerStore:HeaderStore;
    cloudStore:CloudStore;
    userStore:UserStore;
    tarifStore:TarifStore;
    orderStore:OrderStore;
    constructor(){
        this.headerStore = new HeaderStore();
        this.cloudStore = new CloudStore();
        this.userStore = new UserStore();
        this.tarifStore = new TarifStore();
        this.orderStore = new OrderStore();
    }
}