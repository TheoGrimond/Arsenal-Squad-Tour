import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService, PlayerService } from '../player.service';

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

  selectedPlayer: Player;
  players: Player[];

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  getPlayers(): void {
    this.PlayerService.getPlayers().subscribe(players => this.players = players);
  }

  constructor(private PlayerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

}
