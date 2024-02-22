import { Injectable } from "@angular/core";
import axios from "axios";


@Injectable({
    providedIn: 'root'
})

export class RealTimeService {
    API_URL = 'https://hst-api.wialon.com/wialon/ajax.html?';
    constructor() { }

    getSessionId(){
        const sessionId= axios.get(this.API_URL+'svc=token/login&params={"token":"1f59b5fbd0b702d585a477e3a3d701bcDAAE0189ABDC599F4E1BBA038229A4AB2EE328D8"}')
        return sessionId
    }

    getVehiclePosition(sessionId:string){
        const vehiclePosition = axios.get(this.API_URL+
            'svc=core/search_items&params={"spec":{ "itemsType":"avl_unit","propName":"sys_phone_number,sys_name,sys_id","propValueMask":"*","sortType":"sys_name","propType":"property"},"force":1,"flags":1281,"from":0,"to":0}&sid='+sessionId)
    
            return vehiclePosition
    }
  
}