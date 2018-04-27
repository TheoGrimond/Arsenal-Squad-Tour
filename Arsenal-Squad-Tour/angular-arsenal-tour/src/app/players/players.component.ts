import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  player: Player = {
    firstName: 'Alexandre',
    lastName: 'Lacazette',
    nb: 9,
  };

  constructor() { }

  ngOnInit() {
  }

}
