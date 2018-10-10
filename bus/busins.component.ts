import { Component, OnInit } from '@angular/core';
import { BusInsertService } from './busin.service';
import {Bus} from'./bus';

@Component({
    selector: 'bus-insert',
    templateUrl: 'busins.component.html'
})

export class  BusInsComponent implements OnInit {
    b:Bus;
    constructor(private bus1:BusInsertService) {
      this.b=new Bus();
     }
    insertdata()
    {
        this.bus1.insertdata(this.b).subscribe((data)=>{
            console.log("updated");
        })
    }

    ngOnInit() { }
}