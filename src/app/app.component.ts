import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchoolRegistrationComponent } from './dynamic-radio-buttons/school-registration/school-registration.component';
import { PatternComponent } from './validations/pattern/pattern.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , SchoolRegistrationComponent , PatternComponent , UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Forms';
}
