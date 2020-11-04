import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grant-details",
  templateUrl: "./grant-details.component.html",
  styleUrls: ["./grant-details.component.scss"],
})
export class GrantDetailsComponent implements OnInit {
  constructor() {}

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
