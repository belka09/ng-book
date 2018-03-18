import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;

  constructor() {
    this.resetPomodoro();
  }

  ngOnInit(): void {
    setInterval(() => this.tick(), 1000);
  }

  resetPomodoro() {
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }
  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = 'Pause';
      if (this.seconds < 0) {
        this.seconds = 59;
        if (this.minutes < 0) {
          this.resetPomodoro();
        }
      }
    }
  }
  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.minutes < 24 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }
}
