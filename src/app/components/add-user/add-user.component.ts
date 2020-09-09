import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, EmailValidator} from '@angular/forms';
import {UserService} from 'src/app/services/user.service';
import { UserTable } from 'src/app/Model/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      id:[],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.required,Validators.email]]
    })
  }
 /* onSubmit(addForm:UserTable)
  {
    console.log(addForm);
    this.userService.addForm(addForm).subscribe(data=>{
      console.log(data)
      alert("Added Successfully")
    })
  }*/

  onSubmit()
  {
    
  }

}
