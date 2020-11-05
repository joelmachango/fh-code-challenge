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

import { AuthService } from "./shared/auth.service";
import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "register",
        component: RegisterComponent,
        canActivate: [AuthGuard],
      },
      { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
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
  providers: [AuthService, AuthGuard],
})
export class AuthModule {}
