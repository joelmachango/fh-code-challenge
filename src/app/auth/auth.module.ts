import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import {
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AuthComponent } from "./auth.component";

import { AuthService } from "./shared/auth.service";
import { AuthGuard } from "./shared/auth.guard";
import { TokenInterceptor } from "./shared/token.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

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
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
})
export class AuthModule {}
