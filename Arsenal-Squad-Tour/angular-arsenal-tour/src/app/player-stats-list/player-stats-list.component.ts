import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../player';
import { PlayerService } from '../player.service';

import { MatListModule } from '@angular/material';

@Component({
  selector: 'app-player-stats-list',
  templateUrl: './player-stats-list.component.html',
  styleUrls: ['./player-stats-list.component.css']
})
export class PlayerStatsListComponent implements OnInit {

  players: Player[];

  @Input() player: Player;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPlayer();
  }

  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(id)
      .subscribe(player => this.player = player);
  }
}
