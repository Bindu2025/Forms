import { Injectable } from '@angular/core';
import { StudentRegistrationForm } from '../dynamic-radio-buttons/registrationform';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {

  constructor() { }
  saveRegistrationForm(regForm: StudentRegistrationForm) {
    console.log(regForm);
  }  
}
