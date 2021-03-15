import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  clickSubject$ = new Subject();
  title = 'no';
  counter = 0;

  ngOnInit(): void {
    this.clickSubject$?.subscribe(() => ++this.counter);
  }
}
