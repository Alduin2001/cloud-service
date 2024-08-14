import HeaderStore from "./headerStore";
import CloudStore from "./cloudStore";
export default class RootStore{
    headerStore:HeaderStore;
    cloudStore:CloudStore;
    constructor(){
        this.headerStore = new HeaderStore();
        this.cloudStore = new CloudStore();
    }
}