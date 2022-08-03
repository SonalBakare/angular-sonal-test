import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[];
  constructor() {
   this.employees = [
      { code: 'e101', name: 'Sonal', gender: 'female', salary: '100000', DateofBirth: '10/05/1983' },
      { code: 'e102', name: 'Neha', gender: 'female', salary: '20000', DateofBirth: '05/06/1983' },
      { code: 'e103', name: 'Priya', gender: 'female', salary: '30000', DateofBirth: '02/05/1983' },
     { code: 'e104', name: 'Shruti', gender: 'female', salary: '40000', DateofBirth: '04/05/1983' },
       { code: 'e105', name: 'Nancy', gender: 'female', salary: '60000', DateofBirth: '06/05/1983' }
    ];
  }

  ngOnInit(): void {
  }
  getnewEmployee(): any[] {
    this.employees= [
      { code: 'e101', name: 'Sonal', gender: 'female', salary: '100000', DateofBirth: '10/05/1983' },
      { code: 'e102', name: 'Neha', gender: 'female', salary: '20000', DateofBirth: '05/06/1983' },
      { code: 'e103', name: 'Priya', gender: 'female', salary: '30000', DateofBirth: '02/05/1983' },
      { code: 'e104', name: 'Shruti', gender: 'female', salary: '40000', DateofBirth: '04/05/1983' },
       { code: 'e105', name: 'Nancy', gender: 'female', salary: '60000', DateofBirth: '06/05/1983' }
    ];
    return this.employees;
  }

  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }
  getallemployeecount(): number {
    return this.employees.length;
  }

  getmaleemployeecount(): number {
    return this.employees.filter(e=>e.gender==="male").length;
  }

  getfemaleemployeecount(): number {
    return this.employees.filter(e => e.gender ==="female").length;
  }
  
}
