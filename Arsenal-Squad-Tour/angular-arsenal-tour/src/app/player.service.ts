import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Player } from './player';
import { PLAYERS } from './mock-players';
import { MessageService, MessageService } from './message.service';

@Injectable()
export class PlayerService {

  getPlayers(): Observable<Player[]> {
    this.messageService.add('PlayerService has fetched all players.');
    return of(PLAYERS);
  }


  constructor(private messageService: MessageService) { }

}
