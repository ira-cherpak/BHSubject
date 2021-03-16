import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit {

  ngOnInit(): void { //
  }

  constructor() {
  }

  setAccess(type: boolean) {
    localStorage.setItem('access', JSON.stringify(type));
  }
}
