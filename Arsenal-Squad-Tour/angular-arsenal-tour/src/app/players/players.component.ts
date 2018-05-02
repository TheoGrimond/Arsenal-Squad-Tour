import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { PlayersTableComponent } from '../players-table/players-table.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[];

  constructor(private playerService: PlayerService) { }

  getPlayers(): void {
    this.playerService.getPlayersJSON().subscribe(players => {this.players = players; console.log(this.players)});
  }

  ngOnInit() {
    this.getPlayers();
  }
}