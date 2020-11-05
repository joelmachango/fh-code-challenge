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

  fakegrants = [
    {
      id: 1,
      status: "In Consideration",
      name: "Provision of primary health services for refugees.",
      grantor: "USAID",
      location: "Nairobi",
      amount: "$15,00,000",
    },
  ];

  constructor(private grantService: GrantService) {}

  ngOnInit() {
    this.loadGrants();
  }

  loadGrants() {
    this.grantService.getGrants().subscribe(
      (res) => {
        console.log(res.grants);
        // this.grants = res.grants;
        // console.log(this.grants);

        this.grants = this.fakegrants;

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
