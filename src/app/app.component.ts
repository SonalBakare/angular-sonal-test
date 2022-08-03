import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<div><h1>{{getFullname()}}</h1>
<h1>Page Header :-{{name}}</h1>
             <img [src]=imagePath/>
<button [disabled]='isDisable'>Click Me</button><br>
<span bind-innerHtml='name'></span>
          
<input id='inputId' type='text' value='Tom'>
<br/>
<button [class.boldClass]='applyBoldClass' class="colorClass" class=colorClass{{classesToApply}}> my Button </button>
<button  class="colorClass" [ngClass]="addClasses()"> ng Button </button>

<button  class="colorClass" [ngStyle]="addStyle()"> ng style  Button </button>

<button (click)="onClick();"> Click Me </button>
<br/>
<br/>

 <app-employees></app-employees>
<br>
<br>
<input [(ngModel)]='nameForTwoWayBinding' />
 'selected name :' {{nameForTwoWayBinding}}


<app-employee-list></app-employee-list>


            </div>`,
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Employee Details";
  title = 'AngularDemoForTest';
  imagePath: string = 'https://www.pragimtech.com/wp-content/uploads/2019/02/pargim-logo-1.png';
  isDisable: boolean = false;
  classesToApply: string = "boldClass italicClass";
  applyBoldClass: boolean = true;
  applyitalicClass: boolean = false;

  fontSize: number = 30;
  applyFontStyle: boolean = false;

  fName: string = 'Tom';
  lName: string = 'HopKin';

  nameForTwoWayBinding: string ='Two Way'

  getFullname(): string {
    return this.fName + ' ' + this.lName;
  }

  addClasses() {
    let classes = {
      boldClass:this.applyBoldClass,
      italicClass:this.applyitalicClass
    };
    return classes;
  }
  addStyle() {
    let styles = {
      'font-size.px': this.fontSize,
      'font-style': this.applyFontStyle? 'italic' :'normal'



    };
    return styles;
  }

  onClick(): void {
    console.log("Clicked me ");
  }
  

}
