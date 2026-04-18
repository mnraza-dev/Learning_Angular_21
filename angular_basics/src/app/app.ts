import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  btnDisabled = true;
  inputReadOnly = false;

  toggleBtn() {
    this.btnDisabled = !this.btnDisabled;
  }
}
