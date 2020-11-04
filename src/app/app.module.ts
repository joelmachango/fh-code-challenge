import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";

import { AuthModule } from "./auth/auth.module";
import { GrantModule } from "./grant/grant.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";

const routes: Routes = [{ path: "", redirectTo: "grants", pathMatch: "full" }];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    GrantModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
