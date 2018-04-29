import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Player } from './player';
import { PLAYERS } from './mock-players';
import { MessageService } from './message.service';

@Injectable()
export class PlayerService {

  getPlayers(): Observable<Player[]> {
    this.messageService.add('PlayerService has fetched all players.');
    return of(PLAYERS);
  }

  getPlayer(nb: number): Observable<Player> {
    this.messageService.add(`PlayerService has fetched Player nb=${nb}`);
    return of(PLAYERS.find(player => player.nb === nb));
  }

  constructor(private messageService: MessageService) { }

}
