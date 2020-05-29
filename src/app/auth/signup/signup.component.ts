import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserDetails } from 'src/app/common/user-details';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  maxDate;
  userDetails = new UserDetails();
  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit() {
    console.log(this.userDetails);
    this.authservice.registerUser(this.userDetails);
  }
}
