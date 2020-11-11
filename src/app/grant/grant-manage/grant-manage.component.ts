import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Grant } from "../shared/grant.model";
import { GrantService } from "../shared/grant.service";

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
  grantId: any;

  possible_status: Status[] = [
    { value: "In Consideration", viewValue: "In Consideration" },
    { value: "Development", viewValue: "Development" },
    { value: "Submited", viewValue: "Submited" },
    { value: "Did not submit", viewValue: "Did not submit" },
    { value: "Implementation", viewValue: "Implementation" },
    { value: "Closed out", viewValue: "Closed out" },
    { value: "Closed", viewValue: "Closed" },
  ];

  grant: Grant = {};

  param: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private grantService: GrantService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.param = this.route.snapshot.params;
    this.grantId = this.param.grantId;
  }

  ngOnInit() {
    let grantId = this.param.grantId;
    this.getGrant(grantId);
    this.grantId = grantId;
  }

  getGrant(grantId: number) {
    this.grantService.getGrantById(grantId).subscribe(
      (grant: Grant) => {
        this.grant = grant;
      },
      (err) => {
        this.toastr.info("Error loading Grant details.", "No Grant Fount!");
      }
    );
  }

  updateGrant() {
    this.grantService.updateGrant(this.grantId, this.grant).subscribe(
      (res) => {
        this.toastr.success(
          "Grant details have been updated.",
          "Updated Successfully!"
        );
        this.router.navigate(["grants", this.grantId]);
      },
      (err) => {
        this.toastr.error(
          "Error updating Grant details, please try again.",
          "Update Error!"
        );
      }
    );
  }
}
