import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  new;
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  onsubmit(formvalue) {
    if (formvalue.invalid) {

      return;
    }

    this.service.getData(formvalue.value);
    formvalue.resetForm();
  }

}
