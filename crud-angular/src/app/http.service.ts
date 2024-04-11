import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IEmployee } from './interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiurl = "https://localhost:7066";
  http=inject(HttpClient);
  constructor() { }


  getAllEmployee(){
   return this.http.get<IEmployee[]>(`${this.apiurl}/api/Employee`)
  }
  createEmployee(employee:IEmployee){
return this.http.post(this.apiurl+"/api/Employee", employee);
  }
  getEmployee(employeeId:number){
    return this.http.get<IEmployee>(this.apiurl+"/api/Employee/"+employeeId);
  }

  updateEmployee(employeeId:number, employee:IEmployee){
    return this.http.put<IEmployee>(this.apiurl+"/api/Employee/"+employeeId, employee);
  }

  deleteEmployee(employeeId:number){
    return this.http.delete(this.apiurl+"/api/Employee/"+employeeId);
  }
}
