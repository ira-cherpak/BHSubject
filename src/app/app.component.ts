import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      textInput: ['']
    });
  }

  ngOnInit(): void {
    this.form
  }

  // tslint:disable-next-line:typedef
  submit(): void {
    const value = {...this.form.value};
    console.log(value);
    localStorage.setItem('config', JSON.stringify('value'));
  }
}

