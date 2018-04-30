import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
        {id: 9, firstName: 'Alexandre', lastName: 'Lacazette'},
        {id: 11, firstName: 'Mezut', lastName: 'Ozil'},
        {id: 10, firstName: 'Jack', lastName: 'Wilshere'},
        {id: 6, firstName: 'Laurent', lastName: 'Koscielny'},
        {id: 24, firstName: 'Hector', lastName: 'Bellerin'},
        {id: 8, firstName: 'Aaron', lastName: 'Ramsey'}
    ];

    return {players};
  }

}
