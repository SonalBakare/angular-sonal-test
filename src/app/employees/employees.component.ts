import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstname: string = "Sonal";
  lastname: string = "Bakare";
  gender: string = "Female";
  age: number = 40;



  showDetails: boolean = false;

  toggleShowDetails(): void {
    this.showDetails = !this.showDetails;
  }

}

