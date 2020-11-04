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
import { GrantSearchComponent } from "./grant-search/grant-search.component";
import { GrantComponent } from "./grant.component";

const routes: Routes = [
  {
    path: "grants",
    component: GrantComponent,
    children: [
      { path: "", component: GrantListComponent },
      { path: "new", component: GrantCreateComponent },
      { path: "manage/:grantId", component: GrantManageComponent },
      { path: ":grantId", component: GrantDetailsComponent },
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
    GrantSearchComponent,
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
  providers: [],
})
export class GrantModule {}
