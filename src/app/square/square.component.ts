import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-square',
  template: `
    <div 
      class="game-square rounded-lg border bg-teal-lightest 
      shadow-md " 
      (click)="changePlayer()" 
      [ngClass]="{noClick: gameService.winner} "
    >  
    <p class="text-grey-darker"> {{ square.state}} </p>
    </div>
   `,
  styles: [
    `
    .game-square { 
      height: 96%; 
      text-align: center;
      line-height: center;
      cursor: center;
    }

    p { 
      display: inline;
      margin: center;
      font-size: 150px;
      overflow: hidden;
    }

    .noClick {
      pointer-events: none;
    }`,
  ],
})
export class SquareComponent implements OnInit {
  @Input() square;

  constructor(public gameService: GameService) {}

  ngOnInit() {}

  changePlayer() {
    this.gameService.isGameRunning = true;

    if (this.gameService.isGameRunning && this.square.state === null) {
      this.square.state = this.gameService.activePlayer;
      this.gameService.changePlayerTurn(this.square);
    }
  }
}
