import { Component } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

const initFormvalues = {
  firstName: "Bill",
  lastName: "Gates",
  phone: "555-555-999"
};

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userForm: FormGroup;
  formValues = initFormvalues;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: new FormControl(initFormvalues.firstName, [
        Validators.required
      ]),
      lastName: new FormControl(initFormvalues.lastName, [Validators.required]),
      phone: new FormControl(initFormvalues.phone, [Validators.required])
    });
  }

  updateResult() {
    if (this.userForm.invalid) {
      return;
    }
    this.formValues.firstName = this.userForm.value.firstName;
    this.formValues.lastName = this.userForm.value.lastName;
    this.formValues.phone = this.userForm.value.phone;
  }
}
