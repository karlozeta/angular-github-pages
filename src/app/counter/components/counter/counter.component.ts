import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Bienvenidos a Angular: {{counter}}</p>
  <button (click)="increment()">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decrement()">-1</button>`,
})

export class CounterComponent implements OnInit {
  constructor() { }

  counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }

  ngOnInit() { }
}
