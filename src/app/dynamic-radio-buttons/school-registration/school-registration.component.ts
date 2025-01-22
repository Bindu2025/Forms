import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { INFO_SOURCE_SCHOOL, PAYMENT_METHOD, STD_GENDER } from '../regdata';
import { StudentRegistrationService } from '../../services/student-registration.service';

@Component({
  selector: 'app-school-registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './school-registration.component.html',
  styleUrl: './school-registration.component.scss'
})
export class SchoolRegistrationComponent {
  isFormValid!: boolean;
	stdGenData = STD_GENDER;
	infoSourceData = INFO_SOURCE_SCHOOL;
	paymentMethodData = PAYMENT_METHOD;
	registrationForm = {} as FormGroup;

  constructor(private formBuilder: FormBuilder, private regService: StudentRegistrationService) {
	}

  ngOnInit() {
		this.registrationForm = this.formBuilder.group({
			stdName: ['', [Validators.required]],
			stdGender: ['', [Validators.required]],
			infoSource: ['', [Validators.required]],
			payMethod: ['', Validators.required]
		});
	}
  onFormSubmit() {
		this.isFormValid = false;
		if (this.registrationForm.invalid) {
			return;
		}
		this.isFormValid = true;
		this.regService.saveRegistrationForm(this.registrationForm.value);
		this.reset();
	}
  reset() {
		this.registrationForm.reset({
			stdGender: "",
			infoSource: "",
			payMethod: ""
		});
	}
  get stdGender() {
		return this.registrationForm.get('stdGender');
	}
	get infoSource() {
		return this.registrationForm.get('infoSource');
	}
	get payMethod() {
		return this.registrationForm.get('payMethod');
	}
  setDefaultValues() {
		this.registrationForm.patchValue({ stdGender: 'female', infoSource: 'friend', payMethod: "card" });
	}
	onStdGenderChange() {
		console.log(this.stdGender?.value);
	}
	onInfoSourceChange() {
		console.log(this.infoSource?.value);
	}
	onPaymentMethodChange() {
		console.log(this.payMethod?.value);
	}

}
