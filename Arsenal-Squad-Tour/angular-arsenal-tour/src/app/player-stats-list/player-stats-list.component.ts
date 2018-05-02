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
    const nb = +this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayersJSON().subscribe(playerData => {
      for(let data of playerData) {
        if(data.id === nb) {
          this.player = data;
          this.player.id = data.id;
          this.player.firstName = data.firstName;
          this.player.lastName = data.lastName;
          this.player.shooting_accuracy = data.shooting_accuracy;
          this.player.passing_accuracy = data.passing_accuracy;
          this.player.dribbling_accuracy = data.dribbling_accuracy;
          this.player.tackling_accuracy = data.tackling_accuracy;
          this.player.scoring_ratio = data.scoring_ratio;
          this.player.discipline = data.discipline;
        }
      }
    });
}
