import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import {
  MatTableModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { GrantCreateComponent } from "./grant-create/grant-create.component";
import {
  GrantDetailsComponent,
  GrantDetailsPopupConponent,
} from "./grant-details/grant-details.component";
import { GrantListComponent } from "./grant-list/grant-list.component";
import { GrantManageComponent } from "./grant-manage/grant-manage.component";
import { GrantComponent } from "./grant.component";
import { GrantService } from "./shared/grant.service";
import { AuthGuard } from "../auth/shared/auth.guard";

const routes: Routes = [
  {
    path: "grants",
    component: GrantComponent,
    children: [
      { path: "", component: GrantListComponent, canActivate: [AuthGuard] },
      {
        path: "new",
        component: GrantCreateComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "manage/:grantId",
        component: GrantManageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ":grantId",
        component: GrantDetailsComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  entryComponents: [GrantDetailsComponent, GrantDetailsPopupConponent],
  declarations: [
    GrantCreateComponent,
    GrantDetailsComponent,
    GrantListComponent,
    GrantManageComponent,
    GrantComponent,
    GrantDetailsPopupConponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [GrantService, AuthGuard],
})
export class GrantModule {}
