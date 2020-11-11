import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Grant } from "../shared/grant.model";
import { GrantService } from "../shared/grant.service";

export interface DialogData {
  grand_id: number;
}

@Component({
  selector: "app-grant-details",
  templateUrl: "./grant-details.component.html",
  styleUrls: ["./grant-details.component.scss"],
})
export class GrantDetailsComponent implements OnInit {
  grand_id: string;
  grant: Grant = {};
  param: any;
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private grantService: GrantService
  ) {
    this.param = this.route.snapshot.params;
  }

  openDialog() {
    let grantId = this.param.grantId;
    this.dialog.open(GrantDetailsPopupConponent, {
      data: { grand_id: grantId },
    });
    console.log(grantId);
  }

  ngOnInit() {
    let grantId = this.param.grantId;
    this.getGrant(grantId);
  }

  getGrant(grantId: number) {
    this.grantService.getGrantById(grantId).subscribe(
      (grant: Grant) => {
        this.grant = grant;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

@Component({
  selector: "grant-details-popup",
  templateUrl: "grant-details-popup.html",
  styleUrls: ["./grant-details.component.scss"],
})
export class GrantDetailsPopupConponent {
  grandId: any;

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router,
    private grantService: GrantService,

    public dialogRef: MatDialogRef<GrantDetailsPopupConponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  closeDialog() {
    this.dialog.closeAll();
  }

  ngOnInit() {}

  deleteGrant(grantId: number) {
    grantId = this.data.grand_id;
    this.grantService.deleteGrant(grantId).subscribe(
      (res) => {
        if (res) {
          this.toastr.success("Delete Grant!", res.message, {
            timeOut: 3000,
          });
          this.closeDialog();
          this.router.navigate(["/grants"]);
        }
        (err: any) => {
          console.log(err);
        };
      },
      (err) => {
        console.log(err);
        this.toastr.error(" Error Deleting Grant", "Server Error!", {
          timeOut: 3000,
        });
      }
    );
  }
}
