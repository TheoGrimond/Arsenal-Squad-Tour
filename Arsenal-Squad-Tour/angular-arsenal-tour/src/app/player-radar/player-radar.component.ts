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

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private location: Location
  ) { }

   stats: Array<number> = [this.shooting_accuracy ? this.player.shooting_accuracy : null, this.passing_accuracy ? this.player.passing_accuracy : null, this.dribbling_accuracy ? this.player.dribbling_accuracy : null,
     this.tackling_accuracy ? this.player.tackling_accuracy : null, this.scoring_ratio ? this.player.scoring_ratio : null, this.discipline ? this.player.discipline : null];


  ngOnInit() {
    this.getPlayer();
  }

  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(id)
      .subscribe(player => this.player = player);
  }

  // Radar
  public radarChartLabels:string[] = ['Shooting', 'Passing', 'Dribbling', 'Tackling', 'Scoring', 'Discipline'];
  
  public radarChartData:any = [
    {data: [this.stats[0], this.stats[1], this.stats[2], this.stats[3], this.stats[4], this.stats[5]], label: this.player_name ? this.player.lastName : null},
  ];
  
  // public radarChartData:any = [
  //   {data: [this.shooting_accuracy ? this.player.shooting_accuracy : 69, this.passing_accuracy ? this.player.passing_accuracy : null, this.dribbling_accuracy ? this.player.dribbling_accuracy : null,
  //     this.tackling_accuracy ? this.player.tackling_accuracy : null, this.scoring_ratio ? this.player.scoring_ratio : null, this.discipline ? this.player.discipline : null], label: this.player_name ? this.player.lastName : null},
  // ];
  // public radarChartData:any = [
  //   {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'}
  // ];

  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
