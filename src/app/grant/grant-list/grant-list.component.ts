import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
  id: number;
  name: string;
  status: string;
  grantor: string;
  location: string;
  amount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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
    status: "In Consideration",
    name: "Helium",
    grantor: "USAID",
    location: "Nairobi",
    amount: "$15,00,000",
  },
  {
    id: 3,
    status: "In Consideration",
    name: "Lithium",
    grantor: "USAID",
    location: "Nairobi",
    amount: "$15,00,000",
  },
  {
    id: 4,
    status: "In Consideration",
    name: "Beryllium",
    grantor: "USAID",
    location: "Nairobi",
    amount: "$15,00,000",
  },
  {
    id: 5,
    status: "In Consideration",
    name: "Boron",
    grantor: "USAID",
    location: "Nairobi",
    amount: "$15,00,000",
  },
  {
    id: 6,
    status: "In Consideration",
    name: "Carbon",
    grantor: "USAID",
    location: "Nairobi",
    amount: "$15,00,000",
  },
  {
    id: 7,
    status: "In Consideration",
    name: "Nitrogen",
    grantor: "USAID",
    location: "Nairobi",
    amount: "$15,00,000",
  },
  {
    id: 8,
    status: "In Consideration",
    name: "Oxygen",
    grantor: "USAID",
    location: "Nairobi",
    amount: "$15,00,000",
  },
  {
    id: 9,
    status: "In Consideration",
    name: "Fluorine",
    grantor: "USAID",
    location: "Nairobi",
    amount: "$15,00,000",
  },
  {
    id: 10,
    status: "In Consideration",
    name: "Neon",
    grantor: "USAIDEEEEE",
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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

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
