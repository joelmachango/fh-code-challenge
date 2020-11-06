import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
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

  param: any;
  constructor(public dialog: MatDialog, private route: ActivatedRoute) {
    this.param = this.route.snapshot.params;
    console.log(this.param.grantId);
  }

  openDialog() {
    let grantId = this.param.grantId;
    this.dialog.open(GrantDetailsPopupConponent, {
      data: { grand_id: grantId },
    });
    console.log(grantId);
  }

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

  ngOnInit() {}
}

@Component({
  selector: "grant-details-popup",
  templateUrl: "grant-details-popup.html",
  styleUrls: ["./grant-details.component.scss"],
})
export class GrantDetailsPopupConponent {
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
    console.log("DeleteID " + this.data.grand_id);
    grantId = this.data.grand_id;
    console.log("Delete");
    this.grantService.deleteGrant(grantId).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success("Delete Grant!", res.message, {
          timeOut: 3000,
        });
        this.closeDialog();
        this.router.navigate(["/grants"]);
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
