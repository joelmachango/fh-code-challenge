import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Grant } from "./grant.model";

@Injectable({
  providedIn: "root",
})
export class GrantService {
  constructor(private http: HttpClient) {}

  public getGrantById(grantId: any): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/api/grants/" + grantId);
  }

  public getGrants(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/api/grants");
  }

  public createGrant(grant: Grant): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/api/grant", grant);
  }

  public updateGrant(grantId: any, grant: any): Observable<any> {
    const body: any = JSON.stringify({ content: grant });
    return this.http.put("http://127.0.0.1:8000/api/grant/" + grantId, body);
  }

  public deleteGrant(grantId: number): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/grant/${grantId}`);
  }
}
