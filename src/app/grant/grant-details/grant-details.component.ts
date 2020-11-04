import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-grant-details",
  templateUrl: "./grant-details.component.html",
  styleUrls: ["./grant-details.component.scss"],
})
export class GrantDetailsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    console.log(this.grant.id);
    this.dialog.open(GrantDetailsPopupConponent, {});
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

  ngOnInit() {
    console.log(this.grant);
  }
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
    private router: Router
  ) {}

  closeDialog() {
    this.dialog.closeAll();
  }

  deleteGrant() {
    console.log("Delete Grant");

    window.alert("Grant successfully deleted!");
    this.toastr.success("Delete Grant!", "Grant successfully deleted", {
      timeOut: 2000,
    });
    this.closeDialog();
    this.router.navigate(["/grants"]);
  }
}
