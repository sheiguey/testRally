import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
    providedIn: 'root'
})

export class VehiculeService {
    API_URL = 'https://bi.camtrack.mg:1000/rallye/listvehicles';
    constructor() { }

    getVehiclePosition(){
        const listVehicles = axios.get(this.API_URL)
        return listVehicles;
    }
  
}