import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  new;
  constructor() { }

  ngOnInit() {
  }

  onsubmit(formvalue) {
    if (formvalue.invalid) {
      return;
    }
  }

}
