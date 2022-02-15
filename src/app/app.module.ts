import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { PokedexPage } from './pages/pokedex/pokedex.page';
import { LoginPage } from './pages/login/login.page';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TrainerListItemComponent } from './components/trainer-list-item/trainer-list-item.component';
import { TrainerPage } from './pages/trainer/trainer.page';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    PokedexPage,
    LoginPage,
    TrainerListComponent,
    TrainerListItemComponent,
    TrainerPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
