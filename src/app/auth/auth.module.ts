import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import {
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AuthComponent } from "./auth.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      { path: "register", component: RegisterComponent },
      { path: "login", component: LoginComponent },
    ],
  },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent, AuthComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
