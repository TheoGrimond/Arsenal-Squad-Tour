import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from './player';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players: Player[] = [
        {id: 9, firstName: 'Alexandre', lastName: 'Lacazette', shooting_accuracy: 51, scoring_ratio: 70,
         passing_accuracy: 67, tackling_accuracy: 9, dribbling_accuracy: 79, discipline: 15},

        {id: 11, firstName: 'Mezut', lastName: 'Ozil', shooting_accuracy: 60, scoring_ratio: 81, 
        passing_accuracy: 97, tackling_accuracy: 25, dribbling_accuracy: 88, discipline: 27},

        {id: 10, firstName: 'Jack', lastName: 'Wilshere', shooting_accuracy: 32, scoring_ratio: 10, 
        passing_accuracy: 95, tackling_accuracy: 40, dribbling_accuracy: 90, discipline: 14},

        {id: 6, firstName: 'Laurent', lastName: 'Koscielny', shooting_accuracy: 83, scoring_ratio: 54, 
        passing_accuracy: 89, tackling_accuracy: 76, dribbling_accuracy: 12, discipline: 1},

        {id: 24, firstName: 'Hector', lastName: 'Bellerin', shooting_accuracy: 23, scoring_ratio: 6, 
        passing_accuracy: 60, tackling_accuracy: 54, dribbling_accuracy: 68, discipline: 56},

        {id: 8, firstName: 'Aaron', lastName: 'Ramsey', shooting_accuracy: 62, scoring_ratio: 38, 
        passing_accuracy: 71, tackling_accuracy: 57, dribbling_accuracy: 63, discipline: 44}
    ];

    return {players};
  }

}
