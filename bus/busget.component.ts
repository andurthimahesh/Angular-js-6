import { Component } from "@angular/core";
import { Bus } from "./bus";
import { BusGetService } from "./busget.service";

@Component({
    selector:'student-get',
    templateUrl:'busget.component.html'
})
export class BusGetComponent{
    bus:Bus[];
    constructor(private b:BusGetService)
    {
        this.b.getData().subscribe((data)=>{
            this.bus=<Bus[]>data;
        })
    }
    

}