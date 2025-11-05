import { Component, inject, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../../core/service/employee/employee-service.service';
import { IEmployeeList } from '../../../core/model/interface/employee.interface';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employeeService = inject(EmployeeServiceService);
  employeeList: IEmployeeList[] = [];
  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(){
    this.employeeService.getAllEmployee().subscribe((res: IEmployeeList[])=>{
      this.employeeList = res;
    });
  }
}
