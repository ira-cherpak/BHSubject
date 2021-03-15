import {Component, OnInit} from '@angular/core';
import {pipe, Subject} from "rxjs";
import {filter} from "rxjs/operators";

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
    this.clickSubject$?.pipe(filter(i => i === 'increaseMeMain'))
      .subscribe(() => ++this.counter);
  }

  incr() {
    this.clickSubject$.next('increaseMeChild')
  }
}

