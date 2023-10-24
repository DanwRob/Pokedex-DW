import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, forkJoin, mergeMap, switchMap, throwError } from "rxjs";
import { IPokemonList } from "./IPokemonList";
import { IPokemonBase } from "./IPokemonBase";
import { IPokemonSpecie } from "./ISpecie";

@Injectable({
    providedIn:"root"
})

export class PokemonService{

    constructor(private httpClient: HttpClient){}

    getPokemonsList(limit:number=10, offset:number = 0):Observable<IPokemonBase[]>{
        let pokemonUrl: string = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        return this.httpClient.get<IPokemonList>(pokemonUrl).pipe(
            switchMap(pokemon => {
                let listData: Observable<IPokemonBase>[] = [];
                pokemon.results.forEach(element => {
                    listData.push(this.getPokemon<IPokemonBase>(element.name));
                });
                return forkJoin(listData);
            }),
            catchError(this.handleError));
    }

    public getPokemon<T>(id:string):Observable<T>{
        let pokemonUrl: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
        return this.httpClient.get<T>(pokemonUrl).pipe(catchError(this.handleError));
    }

    public getPokemonSpecie(id:string):Observable<IPokemonSpecie>{
        let pokemonSpecieUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
        return this.httpClient.get<IPokemonSpecie>(pokemonSpecieUrl).pipe(catchError(this.handleError));
    }

    handleError(err: HttpErrorResponse){
        let message :string = "";
        if(err.error instanceof ErrorEvent){
            message = `An Error ocurred ${err.error.message}`;
        }
        else{
            message = `Server returned code: ${err.status}, err message is: ${err.message}`
        }
        console.error(message);
        return throwError(() => message);
    }   
}