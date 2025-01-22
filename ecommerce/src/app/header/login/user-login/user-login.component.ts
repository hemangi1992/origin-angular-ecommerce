import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{

  userLoginForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  this.userLoginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  }

  ngOnInit(): void {  
  }  

  onSubmitLoginForm() {
    console.log('user details: ', this.userLoginForm.value);
    this.userLoginForm.reset();
  }
  
}
