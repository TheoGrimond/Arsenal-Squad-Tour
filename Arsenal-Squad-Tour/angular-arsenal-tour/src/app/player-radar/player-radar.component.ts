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

   stats: Array<number> = [this.player ? this.player.shooting_accuracy : null, this.player ? this.player.passing_accuracy : null, this.player ? this.player.dribbling_accuracy : null,
     this.player ? this.player.tackling_accuracy : null, this.player ? this.player.scoring_ratio : null, this.player ? this.player.discipline : null];
     
  ngOnInit() {
    this.getPlayer();
  }

  // ngAfterInit(){
  //   this.radarChartData = [
  //     {data: [this.shooting_accuracy ? this.player.shooting_accuracy : 69, this.passing_accuracy ? this.player.passing_accuracy : null, this.dribbling_accuracy ? this.player.dribbling_accuracy : null,
  //       this.tackling_accuracy ? this.player.tackling_accuracy : null, this.scoring_ratio ? this.player.scoring_ratio : null, this.discipline ? this.player.discipline : null], label: this.player_name ? this.player.lastName : null},
  //   ];
  // }

  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(id)
      .subscribe(player => {
        this.player = player;
        this.shooting_accuracy = player.shooting_accuracy;
        this.passing_accuracy = player.passing_accuracy;
        this.dribbling_accuracy = player.dribbling_accuracy;
        this.tackling_accuracy = player.tackling_accuracy;
        this.scoring_ratio = player.scoring_ratio;
        this.discipline = player.discipline;

        this.radarChartData = [
          {data: [this.shooting_accuracy, this.passing_accuracy, this.dribbling_accuracy, this.dribbling_accuracy, this.tackling_accuracy, this.scoring_ratio, this.discipline], label: player.lastName}
        ];
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
