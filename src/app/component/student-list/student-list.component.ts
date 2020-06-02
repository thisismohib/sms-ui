import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/common/student';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { StudentService } from 'src/app/services/student.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[];

  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listStudents();
    });
  }

  listStudents() {
    this.studentService
      .getStudentListPaginate(this.thePageNumber - 1, this.thePageSize)
      .subscribe(this.processResult());
  }

  processResult() {
    return (data) => {
      this.students = data.content;
      this.thePageNumber = data.pageable.pageNumber + 1;
      this.thePageSize = data.pageable.pageSize;
      this.theTotalElements = data.totalElements;
    };
  }

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listStudents();
  }

  // listStudents() {
  //   this.studentService.getStudentList().subscribe((data) => {
  //     this.students = data;
  //   });
  // }

  onDeleteClick(id: number) {}
}
