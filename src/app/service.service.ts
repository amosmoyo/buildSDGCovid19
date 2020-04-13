import { Injectable } from '@angular/core';
import { Iobject } from './object';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  obj: Iobject;
  constructor() { }

  getData(data: Iobject ) {
    this.obj = data;
  }
}
