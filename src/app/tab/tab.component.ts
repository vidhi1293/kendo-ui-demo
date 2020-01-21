import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor() { }

  public position: string = 'left';

  public selected: number = 1;
  public items: any = [{
            disabled: true,
            city: "Paris",
            temp: 17,
            weather: "rainy"
      }, {
            disabled: false,
            city: "New York",
            temp: 29,
            weather: "sunny"
      }, {
            disabled: false,
            city: "Sofia",
            temp: 23,
            weather: "cloudy"
      }, {
            disabled: false,
            city: "London",
            temp: 19,
            weather: "cloudy"
      }]

  ngOnInit() {
  }

}
