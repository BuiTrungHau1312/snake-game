import { Component, OnInit } from '@angular/core';
import { Game } from './shared/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    const canvas = document.getElementById('arena');
    const game = new Game(canvas);
  }
}
