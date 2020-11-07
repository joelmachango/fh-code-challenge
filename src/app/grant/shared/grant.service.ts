import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Grant } from "./grant.model";

@Injectable({
  providedIn: "root",
})
export class GrantService {
  apiURL: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public getGrantById(grantId: any): Observable<any> {
    return this.http.get(`${this.apiURL}/api/grants/` + grantId);
  }

  public getGrants(): Observable<any> {
    return this.http.get(`${this.apiURL}/api/grants`);
  }

  public createGrant(grant: Grant): Observable<any> {
    return this.http.post(`${this.apiURL}/api/grant`, grant);
  }

  public updateGrant(grantId: any, grant: any): Observable<any> {
    const body: any = JSON.stringify({ content: grant });
    return this.http.put(`${this.apiURL}/api/grant/` + grantId, body);
  }

  public deleteGrant(grantId: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/api/grant/${grantId}`);
  }
}
