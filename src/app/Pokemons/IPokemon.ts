import { IPokemonBase } from "./IPokemonBase";

export interface IPokemon extends IPokemonBase{
    base_experience: number;
    height: number;
    weight: number;
    species: ISpecies;
    stats: IStats[];
    sprites: ISprite;
}

export interface ISpecies{
    name:string;
    url:string;
}

export interface IStats{
    base_stat:number;
    effort:number;
    stat: IStat;
}

export interface IStat{
    name:string;
    url:string;
}

export interface ISprite{
    back_default: string;
    back_female : string;
    front_default: string;
    front_female: string;
}