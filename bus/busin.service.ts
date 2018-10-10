import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Bus} from './bus';

@Injectable()
export class BusInsertService{
    constructor(private http:HttpClient){
        

    }
    insertdata(data:Bus)
    {
      console.log("entry");
      return  this.http.post("http://localhost:3000/bus",data);
    }

}