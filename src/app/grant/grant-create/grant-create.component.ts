import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Grant } from "../shared/grant.model";
import { GrantService } from "../shared/grant.service";

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

  constructor(
    private fb: FormBuilder,
    private grantService: GrantService,
    private toastr: ToastrService,
    private router: Router
  ) {}

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
    this.grantService.createGrant(this.grantCreateForm.value).subscribe(
      (res) => {
        if (res) {
          this.toastr.success(
            "The Grant was added Successfully.",
            "Grant Added!",
            {
              timeOut: 3000,
            }
          );
          this.router.navigate(["grants/", res.grant.id]);
        } else {
          console.log("Try again");
          this.toastr.info("Please try creating the Grant Again", "Try Again!");
        }
      },
      (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
      }
    );
  }
}
