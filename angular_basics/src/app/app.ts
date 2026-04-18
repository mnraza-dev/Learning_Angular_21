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
}
