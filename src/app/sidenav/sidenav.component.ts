import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  formatLabel(value: number) {
    if (value >0) {
      return Math.round(value);
    }
    return value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
