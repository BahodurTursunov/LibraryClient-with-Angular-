import {Component} from "@angular/core";
import {ChildComponent} from "./child.component";

class Item {
  constructor(public id: number, public name: string) {
  }
}

@Component({
  "selector": "my-app",
  "standalone": true,
  "imports": [ChildComponent],
  "template": `
    <tr>
      @for (item of items; track item.id) {
        <li>{{ item.name }}</li>
      }
    </tr>`
})
export class AppComponent {
  items = [new Item(2, "Tom"), new Item(1, "Bob")];
}
