import {Component} from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div>
      <input [(ngModel)]="age" min="1" type="number"/>
      <h2>@if (age > 0 && age < 110) {
        Your age is {{ age }}
      } @else {
        age is undefined
      }</h2>
    </div>`
})
export class AppComponent {
  age: number | undefined = undefined;
}
