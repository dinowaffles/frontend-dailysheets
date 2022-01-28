import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classroom } from './../app/classroom'

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private baseURL = "http://localhost:9092/api/classroom"

  constructor(private http: HttpClient) { }

  getClassroomList(): Observable<Classroom[]>{
    return this.http.get<Classroom[]>(`${this.baseURL}`);
  }

  addClassroom(classroom: Classroom): Observable<Object>{
    return this.http.post(`${this.baseURL}`, classroom);
  }

  updateClassroom(id: number, classroom: Classroom): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, classroom);
  }
  
  deleteClassroom(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
