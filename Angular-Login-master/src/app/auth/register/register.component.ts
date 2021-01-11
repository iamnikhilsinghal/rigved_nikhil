import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
            // FirstName, LastName, Age, DOB, Email A-Za-z

    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
        lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
        age: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[0-9]+$/)
          ]
        ],
        emailId: ['', [Validators.required, Validators.email]], 
      },
  
    );
  }

  passwordValidator(form: FormGroup) {
    const condition =
      form.get('password').value !== form.get('confirmPassword').value;
    return condition ? { passwordsDoNotMatch: true } : null;
  }

  register() {
    if (this.registerForm['status'] === 'VALID') {
      console.log('Form is valid');
      console.log('Entered Data: ', this.registerForm.value);
      this.router.navigate([ 'dashboard/userList' ])
      // this.registerService.register(this.registerForm.value).subscribe((resp: any) => {
      //   console.log('Register API response: ', resp);
      // });
    } else {
      console.log('Form is Invalid');
    }
  }
}
