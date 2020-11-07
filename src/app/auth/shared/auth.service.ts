import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import jwt_decode from "jwt-decode";
import * as moment from "moment";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  public register(userData: any): Observable<any> {
    return this.http.post(`${this.apiURL}/api/user`, userData);
  }

  public login(userData: any): Observable<any> {
    return this.http.post(`${this.apiURL}/api/authenticate`, userData);
  }

  public saveToken(token: string) {
    localStorage.setItem("fh_auth", token);
    return token;
  }

  public decodeToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  public isAuthenticated() {
    let tokenExpireTime = moment.unix(+localStorage.getItem("fh_expire"));
    return moment().isBefore(tokenExpireTime);
  }

  public logout() {
    localStorage.removeItem("fh_auth");
    localStorage.removeItem("fh_info");
    localStorage.removeItem("fh_expire");
    this.router.navigate(["login"]);
  }
}
