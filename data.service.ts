import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}
    getItems(){
      return [{name:"onion",desc:"--lkg"},{name:"tomato",desc:"--2kg"},{name:"paneer",desc:"--1/2kg"}];
    }
  }
