import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="Incrementar(+1)">+1</button>
  <button (click)="Resetby()">Reset</button>
  <button (click)="Incrementar(-1)">-1</button>`
})

export class CounterComponent {

  public counter:number=10;

  constructor() { }

  Incrementar(value:number){
    this.counter+=value;
  }

  Resetby(){
    this.counter=10;
  }




}
