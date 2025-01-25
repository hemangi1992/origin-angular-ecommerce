import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

   userSignupForm!: FormGroup;
  
    constructor(private fb: FormBuilder, private router: Router) {
    this.userSignupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', 
        { validators: [Validators.required, Validators.minLength(6)],
          asyncValidators: [this.validatePassword()],
          updateOn: 'blur'
        }
      ],
    })
    }

    // Angular life cycle hook
    ngOnInit(): void {  
    } 

    // On submit user signup form
    onSubmitSignupForm() {
      console.log('user details: ', this.userSignupForm.value);
      localStorage.setItem('userDetails', JSON.stringify(this.userSignupForm.value));
      this.router.navigateByUrl('user-login');
      this.userSignupForm.reset();
    }

  // Password validators
   validatePassword(): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors | null> => {
        const value = control.value;
        console.log('password value: ', value);
        // Simulate async validation
        return new Observable<ValidationErrors | null>((observer) => {
          // Define password rules
          const hasUpperCase = /[A-Z]/.test(value);
          const hasLowerCase = /[a-z]/.test(value);
          const hasNumber = /\d/.test(value);
          const hasMinLength = value.length >= 6;
  
          const isValid = hasUpperCase && hasLowerCase && hasNumber && hasMinLength;
  
          // Emit the validation result after a delay (simulating async processing)
          setTimeout(() => {
            observer.next(isValid ? null : { invalidPassword: true });
            observer.complete();
          }, 500);
        });
      };
    }

}
