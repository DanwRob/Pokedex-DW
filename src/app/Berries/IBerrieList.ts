export interface IBerrieList{
    results: IResultNames[];
    count:number;
}

export interface IResultNames{
    name:string;
    url:string;
}