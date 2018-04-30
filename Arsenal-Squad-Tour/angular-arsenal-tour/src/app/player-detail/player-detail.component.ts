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
    this.playerService.getPlayer(nb).subscribe(player => this.player = player);
  }

  goBack(): void{
    this.location.back();
  }
}
