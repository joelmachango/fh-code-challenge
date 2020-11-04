import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Grant } from "../shared/grant.model";

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
  grant: Grant;
  grantCreateForm: FormGroup;

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

  addGrant() {
    console.log(this.grantCreateForm.value);
  }
}
