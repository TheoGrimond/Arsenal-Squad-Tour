import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// Angular Material Imports
import { CdkTableModule} from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule, MatGridListModule } from '@angular/material';

// Charts Module Import
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerService } from './player.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-data.service';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { PlayersTableComponent } from './players-table/players-table.component';
import { PlayerRadarComponent } from './player-radar/player-radar.component';
import { PlayerStatsListComponent } from './player-stats-list/player-stats-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PlayerSearchComponent,
    PlayersTableComponent,
    PlayerRadarComponent,
    PlayerStatsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    ChartsModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [PlayerService, MessageService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
