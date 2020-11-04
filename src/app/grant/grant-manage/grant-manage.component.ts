import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-grant-manage",
  templateUrl: "./grant-manage.component.html",
  styleUrls: ["./grant-manage.component.scss"],
})
export class GrantManageComponent implements OnInit {
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

  grant = {
    id: 1,
    name: "Middle East refugee Crisis",
    status: "Development",
    grantor: "USAID",
    location: "Lebanon",
    description:
      "Providing staff, technical support and other forms or children as well as skill training for adults.",
    amount: 6500000,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.grant);
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
