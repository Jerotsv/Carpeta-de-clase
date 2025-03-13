import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-signal',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterSignalComponent {
  count = 0;
  changeCount(value: number) {
    this.count += value;
  }

}
