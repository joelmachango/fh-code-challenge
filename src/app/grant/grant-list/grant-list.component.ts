import { Component, OnInit, ViewChild } from "@angular/core";
import { Grant } from "../shared/grant.model";
import { GrantService } from "../shared/grant.service";

@Component({
  selector: "app-grant-list",
  templateUrl: "./grant-list.component.html",
  styleUrls: ["./grant-list.component.scss"],
})
export class GrantListComponent implements OnInit {
  grants: Grant[] = [];
  displayedColumns: any;
  dataSource: any;
  constructor(private grantService: GrantService) {}

  ngOnInit() {
    this.loadGrants();
  }

  loadGrants() {
    this.grantService.getGrants().subscribe(
      (res) => {
        this.grants = res.grants;
        // console.log(this.grants);
        const ELEMENT_DATA = this.grants;

        this.displayedColumns = [
          "name",
          "status",
          "grantor",
          "location",
          "amount",
          "star",
        ];
        this.dataSource = ELEMENT_DATA;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
