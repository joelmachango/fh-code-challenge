import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MatTableModule, MatIconModule } from "@angular/material";

import { GrantCreateComponent } from "./grant-create/grant-create.component";
import { GrantDetailsComponent } from "./grant-details/grant-details.component";
import { GrantListComponent } from "./grant-list/grant-list.component";
import { GrantManageComponent } from "./grant-manage/grant-manage.component";
import { GrantSearchComponent } from "./grant-search/grant-search.component";
import { GrantComponent } from "./grant.component";

const routes: Routes = [
  {
    path: "grants",
    component: GrantComponent,
    children: [
      { path: "", component: GrantListComponent },
      { path: "new", component: GrantCreateComponent },
      { path: "manage", component: GrantManageComponent },
      { path: ":grantId", component: GrantDetailsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    GrantCreateComponent,
    GrantDetailsComponent,
    GrantListComponent,
    GrantManageComponent,
    GrantSearchComponent,
    GrantComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatIconModule,
  ],
})
export class GrantModule {}
