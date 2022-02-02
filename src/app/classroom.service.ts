import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classroom } from './../app/classroom'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private baseURL = `${environment.baseURL}/api/classroom`;

  constructor(private http: HttpClient) { }

  getClassroomList(): Observable<Classroom[]>{
    return this.http.get<Classroom[]>(`${this.baseURL}`);
  }

  getClassroomById(id: number): Observable<Classroom>{
    return this.http.get<Classroom>(`${this.baseURL}/${id}`);
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
