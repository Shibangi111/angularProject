import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import {employeeComponent} from './components/employee/employee.component';
import { GenderPipe } from './pipes/gender.pipe';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BindingdemoComponent } from './components/bindingdemo/bindingdemo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { LikeDislikeComponent } from './components/like-dislike/like-dislike.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    employeeComponent,
    GenderPipe,
    EmployeelistComponent,
    ReactiveformComponent,
    UserComponent,
    AddUserComponent,
    BindingdemoComponent,
    NgclassdemoComponent,
    LikeDislikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
