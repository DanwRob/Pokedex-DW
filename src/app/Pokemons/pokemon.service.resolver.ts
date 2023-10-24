import {inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { PokemonService } from "./pokemon.service";
import { IPokemon } from "./IPokemon";
import { Observable } from "rxjs";
import { IPokemonSpecie } from "./ISpecie";


export const GetPokemonResolver: ResolveFn<IPokemon> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    service: PokemonService = inject(PokemonService)
):Observable<IPokemon> => service.getPokemon<IPokemon>(route.params['id']);

export const GetSpecieResolver: ResolveFn<IPokemonSpecie> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    service: PokemonService = inject(PokemonService)
):Observable<IPokemonSpecie> => service.getPokemonSpecie(route.params['id']);