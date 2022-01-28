import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sheet } from './sheet';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  private baseURL = "http://localhost:9092/api/sheet";

  constructor(private http: HttpClient) { }

  getSheetList(): Observable<Sheet[]>{
    return this.http.get<Sheet[]>(`${this.baseURL}`);
  }

  getSheetById(id: number): Observable<Sheet>{
    return this.http.get<Sheet>(`${this.baseURL}/${id}`);
  }

  createSheet(sheet: Sheet): Observable<Object>{
    return this.http.post(`${this.baseURL}`, sheet);
  }

  updateSheet(id: number, sheet: Sheet): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, sheet);
  }

  deleteSheet(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
