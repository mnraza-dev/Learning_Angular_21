import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_basics');
  name = "MN Raza";
  age = 31;

  getSum(a: number, b: number) {
    return a + b;
  }

  callMe() {
    alert("Hello " + this.name + ", you are " + this.age + " years old.");
  }
  count: number = 0;
  counter(action: string) {
    if (action === 'increment') {
      this.count++;
    } else if (action === 'decrement') {
      this.count > 0 && this.count--;
    }

  }
}
