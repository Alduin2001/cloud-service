import { makeAutoObservable } from "mobx";
import MainService from "../config/service";
export default class UserStore{

    public status:string = "";
    public statusCode = 0;
    constructor(){
        makeAutoObservable(this);
    }
    public async register(data:object){
        try{
            const response = await MainService.post('/api/users/create',data);
            this.status = response.data.msg;
            this.statusCode = response.status;
        }catch(err){
            console.log(err);
        }
    }
}