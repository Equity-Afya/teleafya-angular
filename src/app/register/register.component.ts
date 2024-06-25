import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    idNumber: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    gender: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
