import { Component, OnInit, Inject } from "@angular/core";
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { GrantService } from "../../shared/grant.service";

export interface DialogData {
    grand_id: number;
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
    ) { }

    closeDialog() {
        this.dialog.closeAll();
    }

    ngOnInit() { }

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