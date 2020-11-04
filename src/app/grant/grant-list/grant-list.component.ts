import { Component, OnInit, ViewChild } from "@angular/core";
import { Grant } from "../shared/grant.model";

const ELEMENT_DATA: Grant[] = [
  {
    id: 1,
    status: "In Consideration",
    name: "Provision of primary health services for refugees.",
    grantor: "USAID",
    location: "Nairobi",
    amount: "$15,00,000",
  },
  {
    id: 2,
    status: "Deployment",
    name: "Provision of primary health services for refugees.",
    grantor: "USAID",
    location: "Nairobi",
    amount: "$15,00,000",
  },
];

@Component({
  selector: "app-grant-list",
  templateUrl: "./grant-list.component.html",
  styleUrls: ["./grant-list.component.scss"],
})
export class GrantListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  displayedColumns = [
    "name",
    "status",
    "grantor",
    "location",
    "amount",
    "star",
  ];
  dataSource = ELEMENT_DATA;
}
