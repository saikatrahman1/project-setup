import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IEmployeeList } from '../../model/interface/employee.interface';
import { GlobalConstant } from '../../constant/Global.constant';
import { getPieValue } from '../../helper/common.helper';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  getAllEmployee() : Observable<IEmployeeList[]> {
    return this.http.get<IEmployeeList[]>(
      environment.API_URL + 
      GlobalConstant.API_END_POINT_CONTROLLER.EMPLOYEE + 
      GlobalConstant.API_END_POINT_METHOD.EMPLOYEE.GET_ALL_EMPLOYEE);
  }

  getValueFromHelper(){
    const value = getPieValue();
  }

  createNewEmployee(obj:any){
    return this.http.post(
      environment.API_URL +
      GlobalConstant.API_END_POINT_CONTROLLER.EMPLOYEE + 
      GlobalConstant.API_END_POINT_METHOD.EMPLOYEE.CREATE_NEW, obj);
  }
}
