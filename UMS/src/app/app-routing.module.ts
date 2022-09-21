import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ArrayOfObjectsComponent } from './array-of-objects/array-of-objects.component';
import { ColorSelectionComponent } from './color-selection/color-selection.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifExample1Component } from './ngif-example1/ngif-example1.component';
import { NgifComponent } from './ngif/ngif.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
{path:'addUser', component:AddUserComponent},
{path:'userList', component:UserListComponent},
{path:'editUser', component:EditUserComponent},
{path:'ngIF', component:NgifComponent},
{path:'userDetails',component:UserdetailsComponent},
{path:'ngFor',component:NgforComponent},
{path:'ngIfExample1',component:NgifExample1Component},
{path:'arrayOfObjects',component:ArrayOfObjectsComponent},
{path:'colorSelection',component:ColorSelectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
