import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PokemonsComponent } from './Pokemons/pokemons.component';
import { BerriesComponent } from './Berries/berries.component'
import { appRoutes } from 'src/routes';
import { PokemonDetailComponent } from './Pokemons/Details/pokemon-detail.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { ListPokemonComponent } from './Pokemons/ListPokemons/list-pokemon.component';
import { ListBerriesComponent } from './Berries/ListBerries/list-berries.component';
@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    BerriesComponent,
    PokemonDetailComponent,
    NavbarComponent,
    ListPokemonComponent,
    ListBerriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
