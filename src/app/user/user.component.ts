import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../constants/user';
import { UserService } from '../services/user.service';
import { Technology } from '../domain/technology';
import { Profile } from '../domain/profile';

@Component({
  selector: 'app-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  isValidFormSubmitted = false;
	allProfiles?: Profile[];
	allTechnologies?: Technology[];
	initialProfileVal = null;
	
	constructor(private userService: UserService) { }
	ngOnInit(): void {
		this.allProfiles = this.userService.getPofiles();
		this.allTechnologies = this.userService.getTechnologies();
	}
	onFormSubmit(form: NgForm) {
		this.isValidFormSubmitted = false;
		if (form.valid) {
			this.isValidFormSubmitted = true;
		} else {
			return;
		}
		let newUser: User = form.value;
		this.userService.createUser(newUser);
		this.resetUserForm(form);
	}
	resetUserForm(form: NgForm) {
		form.resetForm();
		this.initialProfileVal = null;
	}
	setDefaultValues(form: NgForm) {
		let user = new User();
		user.username = "Narendra Modi";
		user.age = "20";
		user.gender = 'male';
		user.isMarried = '';
		user.profile = this.allProfiles;
		user.technologies = [
			this.allTechnologies ,
			this.allTechnologies
		];
		user.isTCAccepted = '';
		form.setValue(user);
	}
	compareTech(t1: Technology, t2: Technology): boolean {
		//console.log(t1.techId +'-' + t2.techId);
		return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
	}
} 


