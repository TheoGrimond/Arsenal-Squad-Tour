import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Player } from './player';
import { MessageService } from './message.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class PlayerService {

  private playersUrl = 'api/players';
  result: Object;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getPlayers(): Observable<Player[]> {
    this.messageService.add('PlayerService has fetched all players.');

    return this.http.get<Player[]>(this.playersUrl)
    .pipe(
      tap(players => this.log(`fetched players`)),
      catchError(this.handleError('getPlayers', []))
    );
  }

  /** GET player by id. Will 404 if id not found */
  getPlayer(id: number): Observable<Player> {
    const url = `api/players/${id}`;
    return this.http.get<Player>(url)
    .pipe(
      tap(_ => this.log(`fetched player id=${id}`)),
      catchError(this.handleError<Player>(`FAILED getPlayer id=${id}`))
    );
  }

  // /** GET JSON player by id. Will 404 if id not found */
  // getJSON(id: number): Observable<Player> {
  //   const url = "/assets/data/playersJSON.json";
  //   return this.http.get<Player[]>(url).map(res => res);
  //   return this.http.get(url).map((response: Response) => response.json())
  //   .do(data => console.log("User data" + JSON.stringify(data)))
  //   .catch(this.handleErrorJSON);
  // }

  getPlayersJSON(): Observable<Player[]> {
    const url = "/assets/data/playersJSON.json";
    console.log(this.http.get<Player[]>(url));
    return this.http.get<Player[]>(url);
    // return this.http.get(url).map((response: Response) => <Player[]>response.json())
    // .do(data => console.log("User data" + JSON.stringify(data)))
    // .catch(this.handleErrorJSON);
  }

  searchPlayers(term: string): Observable<Player[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Player[]>(`api/players/?lastName=${term}`).pipe(
      tap(_ => this.log(`found players matching "${term}"`)),
      catchError(this.handleError<Player[]>('searchPlayers', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

private handleErrorJSON(error: Response) {
  console.log(error);
  return Observable.throw(error.json().error || 'Internal Server error');
}


  private log(message: string) {
    this.messageService.add('PlayerService: ' + message);
  }

}
