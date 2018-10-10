import { Component, OnInit } from '@angular/core';
import { Student } from "./student";
import { StudentService } from './student.service';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent implements OnInit {
    student:Student[];
    constructor(private ss:StudentService) { 
        this.ss.getAllstudent().subscribe((data)=>
        {
         this.student=<Student[]>data;   
        })
    }
   

    ngOnInit() { }
}