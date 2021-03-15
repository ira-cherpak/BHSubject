import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit {
  @Input('clicker') clickSubject$: Subject<any> | undefined;
  c = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.clickSubject$?.subscribe(() => ++this.c);
  }

  pressMe() {
    this.clickSubject$?.next('increaseME');
  }

}
