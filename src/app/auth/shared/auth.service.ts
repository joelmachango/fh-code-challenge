import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  // private decodedToken;

  constructor(private http: HttpClient) {
    // this.decodedToken = JSON.parse(localStorage.getItem("fh-auth"));
    // console.log(this.decodedToken);
  }

  public isAuthenticated(): boolean {
    return false;
  }

  public register(userData: any): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/api/user", userData);
  }

  public login(userData: any): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/api/authenticate", userData);
  }

  public saveToken(token: string) {
    localStorage.setItem("fh_auth", token);
    return token;
  }

  private decodeToken() {}
}
