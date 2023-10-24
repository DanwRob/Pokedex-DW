import { Routes } from "@angular/router";
import { PokemonsComponent } from "./app/Pokemons/pokemons.component";
import { BerriesComponent } from "./app/Berries/berries.component";
import { PokemonDetailComponent } from "./app/Pokemons/Details/pokemon-detail.component";
import { GetPokemonResolver, GetSpecieResolver } from "./app/Pokemons/pokemon.service.resolver";


export const appRoutes: Routes = [
    {path:"berries", component: BerriesComponent},
    {path:"pokemons/:id", component:PokemonDetailComponent, resolve: {pokemon: GetPokemonResolver, specie: GetSpecieResolver}},
    {path:"pokemons", component:PokemonsComponent},
    {path:"", redirectTo:"/pokemons", pathMatch:"full"}
]