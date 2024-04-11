import { Component, inject } from '@angular/core';
import { IEmployee } from '../../interfaces/employee';
import { HttpService } from '../../http.service';
import {MatTableModule} from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule,MatButton,RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
employeeList:IEmployee[]=[];
httpservice=inject(HttpService);
router = inject(Router);
displayedColumns: string[] = [
  'id', 
  'name', 
  'email', 
  'age',
  'phoneNumber', 
  'salary',
  'action'];
ngOnInit(){
  this.getEmployeeFromServer();
};

getEmployeeFromServer(){
  this.httpservice.getAllEmployee().subscribe(result=>{
    this.employeeList = result;
    console.log(this.employeeList);
})
}
edit(id:number){
  console.log(id);
  this.router.navigateByUrl("employee/"+id)
}
  delete(id:number){
    console.log(id);
    this.httpservice.deleteEmployee(id).subscribe(()=>{
      console.log("Deleted Succesfully");
      this.getEmployeeFromServer();
    })

  }
}
