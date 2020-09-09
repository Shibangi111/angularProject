import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindingdemo',
  templateUrl: './bindingdemo.component.html',
  styleUrls: ['./bindingdemo.component.css']
})
export class BindingdemoComponent implements OnInit {

  itemCount: number = 1;
  btnText:string="Add an Item";
  message:string="Hello Students";
  goals=[];
  goal='Be a good human being-Never lie';

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.goals.push(this.goal);  
      this.goal= ''; 
       this.itemCount = this.goals.length;
  }

}
