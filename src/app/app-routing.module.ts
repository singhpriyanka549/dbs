import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowUserComponent } from './show-user/show-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: "", component: AddUserComponent },
  { path: "ShowUser", component: ShowUserComponent },
  { path: 'EditUser/:userid', component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
