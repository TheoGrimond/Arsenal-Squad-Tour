import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players: Player[];
  displayedColumns = ['id', 'firstName', 'lastName'];

  constructor(private playerService: PlayerService) { }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
  }

  ngOnInit() {
    this.getPlayers();
  }
}
