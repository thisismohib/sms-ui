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

  getStudentList(): Observable<Student[]> {
    return this.httpClient
      .get<Student[]>(this.baseUrl)
      .pipe(map((response) => response));
  }

  getStudentListPaginate(
    thePage: number,
    thePageSize: number
  ): Observable<GetResponse> {
    const url = `${this.baseUrl}?page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponse>(url);
  }

  getStudent(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseUrl}/${id}`);
    // return this.httpClient
    //   .get<Student>(`${this.baseUrl}/${id}`)
    //   .pipe(map((response) => response));
  }
}

interface GetResponse {
  content: {
    students: Student[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
