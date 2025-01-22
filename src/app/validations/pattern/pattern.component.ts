import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../constants/user';

@Component({
  selector: 'app-pattern',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './pattern.component.html',
  styleUrl: './pattern.component.scss'
})
export class PatternComponent implements OnInit {
  userForm = {} as FormGroup;
  formInitialized = false;

  // unamePattern = "^[a-z0-9_-]{8,15}$";
  unamePattern = "";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  isValidFormSubmitted = false;

  ngOnInit(): void {
    try {
      this.initializeForm();
       this.formInitialized = true;
    } catch (error) {
      console.error('Error initializing form:', error);
    }
  }
  
  initializeForm(): void {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
      password: ['', [Validators.required, Validators.pattern(this.pwdPattern)]],
      mobileNumber: ['', Validators.pattern(this.mobnumPattern)],
      email: ['', Validators.pattern(this.emailPattern)],
    });
  }

  
  constructor( private formBuilder:FormBuilder, private userService:UserService) {
  }
 
  onFormSubmit() {
     this.isValidFormSubmitted = false;
     if (this.userForm?.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     let user: User = this.userForm?.value;
     this.userService.createUser(user);
     this.userForm?.reset();
  }
  reset(){
    this.userForm.reset({
			username: "",
			password: "",
			mobileNumber: "",
      email:""
		});
  }
  get username() {
     return this.userForm?.get('username');
  }
  get password() {
     return this.userForm?.get('password');
  }  
  get mobileNumber() {
     return this.userForm?.get('mobileNumber');
  }    
  get email() {
     return this.userForm?.get('email');
  }      

}
