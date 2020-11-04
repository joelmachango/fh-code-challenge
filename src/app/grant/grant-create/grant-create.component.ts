import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-grant-create",
  templateUrl: "./grant-create.component.html",
  styleUrls: ["./grant-create.component.scss"],
})
export class GrantCreateComponent implements OnInit {
  grantCreateForm: FormGroup;
  errors: any[] = [];
  notifyMessage: string = "";

  myControl = new FormControl();
  options: string[] = [
    "In Consideration",
    "Development",
    "Submited",
    "Did not submit",
    "Implementation",
    "Not awarded",
    "Closed out",
    "Closed",
  ];

  possible_status: Status[] = [
    { value: "In Consideration", viewValue: "In Consideration" },
    { value: "Development", viewValue: "Development" },
    { value: "Submited", viewValue: "Submited" },
    { value: "Did not submit", viewValue: "Did not submit" },
    { value: "Implementation", viewValue: "Implementation" },
    { value: "Closed out", viewValue: "Closed out" },
    { value: "Closed", viewValue: "Closed" },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.grantCreateForm = this.fb.group({
      name: ["", Validators.required],
      status: ["", Validators.required],
      grantor: ["", Validators.required],
      location: ["", Validators.required],
      description: ["", Validators.required],
      amount: ["", Validators.required],
    });
  }

  onStatusChange(status) {
    console.log(status);
  }

  addGrant() {
    console.log(this.grantCreateForm.value);
  }
}
