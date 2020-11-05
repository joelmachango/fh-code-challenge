import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../app/auth/shared/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Boolean = false;

  constructor(public auth: AuthService) {}

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }
}
