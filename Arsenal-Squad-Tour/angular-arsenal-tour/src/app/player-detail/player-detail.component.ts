import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../player';
import { PlayerService } from '../player.service';
import { PlayerRadarComponent } from '../player-radar/player-radar.component';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  @Input() player: Player;

  id: number;
  player_name: string;
  firstName: string;
  lastName: string;
  shooting_accuracy: number;
  passing_accuracy: number;
  dribbling_accuracy: number;
  tackling_accuracy: number;
  scoring_ratio: number;
  discipline: number;

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
          console.log(data);
          this.player = data;
          this.player.id = data.id;
          this.player.firstName = data.firstName;
          this.player.lastName = data.lastName;
          this.shooting_accuracy = data.shooting_accuracy;
          this.passing_accuracy = data.passing_accuracy;
          this.dribbling_accuracy = data.dribbling_accuracy;
          this.tackling_accuracy = data.tackling_accuracy;
          this.scoring_ratio = data.scoring_ratio;
          this.discipline = data.discipline;
        }
      }
    });
  }

  goBack(): void{
    this.location.back();
  }
}
