import { Component, inject, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../../core/service/employee/employee-service.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employeeService = inject(EmployeeServiceService);
  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(){
    this.employeeService.getAllEmployee().subscribe((res: any)=>{});
  }
}
