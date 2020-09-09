import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { employeeComponent } from './components/employee/employee.component';
import {EmployeelistComponent} from './components/employeelist/employeelist.component';
import {ReactiveformComponent} from './components/reactiveform/reactiveform.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BindingdemoComponent } from './components/bindingdemo/bindingdemo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'about',component:AboutComponent},
  {path: 'emp',component:employeeComponent},
  {path: 'employeelist', component:EmployeelistComponent},
  {path: 'reactiveform',component:ReactiveformComponent},
  {path: 'userlist', component:UserComponent},
  {path: 'addUser',component:AddUserComponent},
  {path:'binding',component:BindingdemoComponent},
  {path:'ngclassdemo', component:NgclassdemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
