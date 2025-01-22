import { Injectable } from '@angular/core';
import { User } from '../constants/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  createUser(user: User) {
    console.log('User Name: ' + user.username);
    console.log('Password: ' + user.password);
    console.log('Mobile Number: ' + user.mobileNumber);
    console.log('Email: ' + user.email);
  }
}
