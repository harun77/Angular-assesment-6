import { Component, OnInit } from "@angular/core";
import { EmsService } from "src/app/services/ems/ems.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  employee: any;
  newEmployeeId: number;
  newEmployeeEId: number;
  newEmployeeName: string;
  isEdit: boolean;

  constructor(private emsService: EmsService) {}

  ngOnInit() {
    this.emsService.getEmployee().subscribe(res => {
      this.employee = res;
      console.log(res);
    });
  }

  createEmployee() {
    this.isEdit = false;
    this.newEmployeeEId = null;
    this.newEmployeeName = "";
  }

  editIt(employeeToEdit: any) {
    this.isEdit = true;
    this.newEmployeeId = employeeToEdit.id;
    this.newEmployeeEId = employeeToEdit.eid;
    this.newEmployeeName = employeeToEdit.name;
  }

  createIt() {
    this.emsService.createEmployee({
        eid: this.newEmployeeEId,
        name: this.newEmployeeName
      })
      .subscribe(res => console.log(res));
  }

  updateIt() {
    this.emsService.updateEmployee({
        id: this.newEmployeeId,
        eid: this.newEmployeeEId,
        name: this.newEmployeeName
      })
      .subscribe(res => console.log(res));
  }

  deleteIt(employeeIdTodelete: number) {
    this.emsService.deleteEmployee(employeeIdTodelete)
      .subscribe(res => console.log(res));
  }
}
