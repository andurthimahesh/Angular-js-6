import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent implements OnInit {

    student: Student;
    constructor(private ss: StudentService) {
        this.student = new Student();
    }
    save() {
        this.ss.insertStudent(this.student).subscribe((data)=>
        {
            alert('added');
        })

    }
    ngOnInit() { }
}