import {Component} from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <input [ngModel]="op"/>
    <p>a = {{ a }} b = {{ b }}</p>
    <p>Результат:
      @switch (op) {
        @case ("+") {
          {{ a + b }}
        }
        @case ("-") {
          {{ a - b }}
        }
        @case ("*") {
          {{ a * b }}
        }
        @default {
          Неизвестная операция
        }
      }
    </p>
  `
})
export class AppComponent {
  op = "*";
  a = 10;
  b = 5;
}
