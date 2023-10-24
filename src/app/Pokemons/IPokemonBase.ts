export interface IPokemonBase{
    id: number,
    name: string,
    types: IPokemonType[],
    order: number
}

export interface IPokemonType{
    type: IType;
    slot: number;
}

export interface IType{
    name: string;
    url: string;
}