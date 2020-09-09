import { Component, OnInit } from '@angular/core';
import {UserTable} from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //Variable of type UserTable 
  users: UserTable[];

  constructor(private _userService: UserService, private _router:Router) { }

  ngOnInit(): void {

    this._userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
      });
  }


  addUser(){
    this._router.navigate(['addUser']);
  }

}
