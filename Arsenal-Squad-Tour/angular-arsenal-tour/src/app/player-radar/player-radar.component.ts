import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-radar',
  templateUrl: './player-radar.component.html',
  styleUrls: ['./player-radar.component.css']
})
export class PlayerRadarComponent implements OnInit {
  players: Player[];
  player_name: string;
  shooting_accuracy: number;
  passing_accuracy: number;
  dribbling_accuracy: number;
  tackling_accuracy: number;
  scoring_ratio: number;
  discipline: number;

  @Input() player: Player;
  public radarChartData:any;

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
          this.shooting_accuracy = data.shooting_accuracy;
          this.passing_accuracy = data.passing_accuracy;
          this.dribbling_accuracy = data.dribbling_accuracy;
          this.tackling_accuracy = data.tackling_accuracy;
          this.scoring_ratio = data.scoring_ratio;
          this.discipline = data.discipline;

          this.radarChartData = [
            {data: [this.shooting_accuracy, this.passing_accuracy, this.dribbling_accuracy, this.dribbling_accuracy, this.tackling_accuracy, this.scoring_ratio, this.discipline], label: this.player.lastName}
          ];
        }
      }
    });
  }

  // Radar
  public radarChartLabels:string[] = ['Shooting', 'Passing', 'Dribbling', 'Tackling', 'Scoring', 'Discipline'];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
