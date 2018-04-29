import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService, PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[];

  getPlayers(): void {
    this.PlayerService.getPlayers().subscribe(players => this.players = players);
  }

  constructor(private PlayerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

}
