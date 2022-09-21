import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgifComponent } from './ngif/ngif.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifExample1Component } from './ngif-example1/ngif-example1.component';
import { ArrayOfObjectsComponent } from './array-of-objects/array-of-objects.component';
import { ColorSelectionComponent } from './color-selection/color-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    EditUserComponent,
    NgifComponent,
    UserdetailsComponent,
    NgforComponent,
    NgifExample1Component,
    ArrayOfObjectsComponent,
    ColorSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
