import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  a: number = 1;
  color: string = "red";
  plc = "name";
  name = "";

  ClickMe() {
    alert("Button Clicked");
  }


}
