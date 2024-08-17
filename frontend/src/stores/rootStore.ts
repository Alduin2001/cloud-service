import HeaderStore from "./headerStore";
import CloudStore from "./cloudStore";
import UserStore from "./userStore";
export default class RootStore{
    headerStore:HeaderStore;
    cloudStore:CloudStore;
    userStore:UserStore;
    constructor(){
        this.headerStore = new HeaderStore();
        this.cloudStore = new CloudStore();
        this.userStore = new UserStore();
    }
}