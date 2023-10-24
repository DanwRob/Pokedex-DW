export interface IPokemonSpecie{
    flavor_text_entries: IPokemonDescription[];
    names:IPokemonName[];
}

export interface IPokemonDescription{
    flavor_text:string;
    language: string;
    version:string;
}

export interface IPokemonName{
    languaje:string;
    name: string;
}