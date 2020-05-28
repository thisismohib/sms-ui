import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../common/student';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:8081/api/students';
  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<Student[]> {
    return this.httpClient
      .get<Student[]>(this.baseUrl)
      .pipe(map((response) => response));
  }
}

interface GetResponse {
  _embedded: {
    students: Student[];
  };
}
