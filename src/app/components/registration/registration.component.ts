import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private _registerForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this._registerForm = this._formBuilder.group({
      username: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit() {
    console.log(this._registerForm.value);
  }
}
