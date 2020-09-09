import {Component} from '@angular/core';
import {Product} from 'src/app/Model/Product';


@Component({

    selector : 'app-emp',
   templateUrl : './employee.component.html'
   
})


export class employeeComponent{
  
//Simple Array Declaration
  Subjects:string[]=["Angular","Java","Dotnet"];
  ShowFaculy: boolean = true;
FacultyName: string = "Rashmi";

//array of any type
employees: any[] = [
   {
        code: 'emp101', name: 'Rashmi', gender: 'Female',
        annualSalary: 5500, dateOfBirth: '05/16/1988'
    },
    {
        code: 'emp101', name: 'Nisha', gender: 'Female',
        annualSalary: 5500, dateOfBirth: '05/16/1988'
    },
    {
        code: 'emp101', name: 'Abhay', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '05/16/1988'
    }
  ];

  //Simple variable declaration
  id:number=10;
  name:string="IPhone";
  cost:number=100000;
  category:string="Electronics";

   // Object of class Product
   pro:Product={id:11,name:"Note8",cost:43434,category:'Electronics'};

   // Array of object
   products:Product[]=[
    {id:11,name:"Note8",cost:43434,category:'Electronics'},
    {id:12,name:"Keyboard",cost:3434,category:'Electronics'},
    {id:13,name:"Chair",cost:4434,category:'Furniture'}
  ];

  //Function without parameters
  myFunction() {
    alert("You Clicked Me");
  }

  //Function with parameters
  deleteProduct(id: number) {
    alert("Product to be deleted" + id)
  }
  editProduct(id: number, name: string) {
    alert(`Product to be edited ${id} and ${name}`);
  }


}