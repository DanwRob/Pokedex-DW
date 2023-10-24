import { Component, Input, OnInit } from "@angular/core";
import { IPokemonBase } from "../IPokemonBase";

@Component({
    selector:"list-pokemon",
    templateUrl:"./list-pokemon.component.html",
    styleUrls: ["./list-pokemon.component.css"]
})

export class ListPokemonComponent{
    @Input() pokemon!:IPokemonBase;

    fixPokemonId(id:number):string{
        if(id < 10){
         return `00${id}`;
        }
        else if(id < 100){
         return `0${id}`;
        }
        return id.toString();
     }

}