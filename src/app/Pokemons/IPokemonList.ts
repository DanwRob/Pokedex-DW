export interface IPokemonList{
    count:number;
    next:string;
    previous: string;
    results: IPokemonListResult[];
}

export interface IPokemonListResult{
    name: string;
    url: string;
}