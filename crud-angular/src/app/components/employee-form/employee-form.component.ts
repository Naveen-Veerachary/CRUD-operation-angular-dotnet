import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule,MatButton,FormsModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {
fromBuilder = inject(FormBuilder);
httpService=inject(HttpService);
router = inject(Router);
route = inject(ActivatedRoute);
employeeForm=this.fromBuilder.group({
  name:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
  age:[0,[Validators.required]],
  phoneNumber:['',[]],
  salary:[0,[Validators.required]],
});

employeeId!:number;
isEdit = false;
ngOnInit(){
this.employeeId=this.route.snapshot.params['id'];
if(this.employeeId){
  this.isEdit = true;
  this.httpService.getEmployee(this.employeeId).subscribe(result=>{
    console.log(result);
    this.employeeForm.patchValue(result);
  })
  }
}

save(){
  console.log(this.employeeForm.value);
  const employee: IEmployee={
    name:this.employeeForm.value.name!,
    email:this.employeeForm.value.email!,
    age:this.employeeForm.value.age!,
    phoneNumber:this.employeeForm.value.phoneNumber!,
    salary:this.employeeForm.value.salary!,

  }
  if(this.isEdit){
    this.httpService.updateEmployee(this.employeeId,employee).subscribe(()=>{
      console.log("Success");
      this.router.navigateByUrl("");
    });
  }else{
    this.httpService.createEmployee(employee).subscribe(()=>{
      console.log("Success");
      this.router.navigateByUrl("");
    });
  }
    
  
}
}
