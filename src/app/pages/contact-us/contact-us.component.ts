import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  repeatPassword: string = 'none';
  ngOnInit(): void {


  }

  registerForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mobile: new FormControl("", [Validators.pattern("[0-9]*"), Validators.minLength(3), Validators.maxLength(13)]),
    gender: new FormControl("", [Validators.required]),
    pwd: new FormControl("", [Validators.required]),
    rpwd: new FormControl("")
  });

   registerSubmitted() {
    if (this.registerForm.valid && this.registerForm.value.pwd === this.registerForm.value.rpwd) {
      console.log("Form Submitted", this.registerForm.value);
      console.log("Form Submitted", this.registerForm)
    } else {
      console.log("Form is invalid");
      this.registerForm.markAllAsTouched();
    }
  }

  get FirstName(): FormControl {
    return this.registerForm.get("firstName") as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get("lastName") as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }

  get Mobile(): FormControl {
    return this.registerForm.get("mobile") as FormControl;
  }

  get Gender(): FormControl {
    return this.registerForm.get("gender") as FormControl;
  }

  get Password(): FormControl {
    return this.registerForm.get("pwd") as FormControl;
  }

  get ConfirmPassword(): FormControl {
    return this.registerForm.get("rpwd") as FormControl;
  }
}
