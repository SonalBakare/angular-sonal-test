import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<div><h1>{{ name}}</h1>
           <app-employees></app-employees>

            </div>`,
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Employee Details";
  title = 'AngularDemoForTest';
}
