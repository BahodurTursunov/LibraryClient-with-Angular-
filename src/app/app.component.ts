import {Component} from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    @for (item of items; track item) {
      <li>{{ item }}</li>
    }
  `
})
export class AppComponent {
  items = ["Tom", "Eliot", "Ange"];
}
