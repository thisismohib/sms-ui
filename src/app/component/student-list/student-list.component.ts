import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/common/student';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { StudentService } from 'src/app/services/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.listStudents();
  }

  listStudents() {
    this.studentService.getProductList().subscribe((data) => {
      this.students = data;
    });
  }

  onDeleteClick(id: number) {}
}
