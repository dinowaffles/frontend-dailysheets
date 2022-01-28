import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './../app/student'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:9092/api/student"

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseURL}`);
  }

  addStudent(student: Student): Observable<Object>{
    return this.http.post(`${this.baseURL}`, student);
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, student);
  }

  deleteStudent(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
