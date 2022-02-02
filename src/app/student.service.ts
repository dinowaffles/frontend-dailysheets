import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './../app/student'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = `${environment.baseURL}/api/student`

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseURL}`);
  }

  getStudentById(id: number): Observable<Student>{
    return this.http.get<Student>(`${this.baseURL}/${id}`);
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
