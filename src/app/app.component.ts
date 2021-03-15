import {Component, OnInit} from '@angular/core';
import {pipe, Subject} from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  clickSubject$ = new Subject();
  title = 'no';
  counter = 0;
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      textInput: ['']
    });
  }

  ngOnInit(): void {
    this.clickSubject$?.pipe(filter(i => i === 'increaseMeMain'))
      .subscribe(() => ++this.counter);
    console.log(this.form.valueChanges);
    this.form.valueChanges
      .pipe(debounceTime(2000))
      .subscribe(val => {
        console.log(123);
      });


  }

  incr() {
    this.clickSubject$.next('increaseMeChild');
  }
}

