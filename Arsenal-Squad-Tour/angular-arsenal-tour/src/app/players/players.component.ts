import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[];

  constructor(private PlayerService: PlayerService) { }

  getPlayers(): void {
    this.PlayerService.getPlayers().subscribe(players => this.players = players);
  }

  ngOnInit() {
    this.getPlayers();
  }

}
