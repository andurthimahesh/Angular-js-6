import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'c:/Users/Trinesh/Downloads/ANGULAR 6 SEP EVENING. ANILE  -20181008T161503Z-001/ANGULAR 6 SEP EVENING. ANILE/8 oct 2018/12 SPA/completed/student';

@Injectable()
export class StudentService {

    constructor(private http:HttpClient) { }

    getAllstudent()
    {
    return this.http.get("http://localhost:3000/students");
    }
    insertStudent(data:Student)
    {
        return this.http.post("http://localhost:3000/students",data);
    }
}