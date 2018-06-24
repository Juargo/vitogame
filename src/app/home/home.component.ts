import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public datagameActual;
  constructor(
    private _gameService: GameServiceService
  ) { }

  ngOnInit() {
    this._gameService.getGameActual()
    .subscribe(data => this.datagameActual = data)

  }

}
