import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, of, switchMap, tap, throwError } from 'rxjs';
import { IBerrie } from './IBerrie';
import { IBerrieList } from './IBerrieList';

@Injectable({
  providedIn: 'root'
})
export class BerriesService {

  constructor(private httpClient: HttpClient) { }

  getBerries(limit:number= 15, offset: number = 0):Observable<IBerrie[]>{
    const urlBerries:string = `https://pokeapi.co/api/v2/berry?offset=${offset}&limit=${limit}`;
    return this.httpClient.get<IBerrieList>(urlBerries).pipe(
      switchMap(berries => {
        let listData: Observable<IBerrie>[] = [];
        berries.results.forEach(element => {
          let name: string ='';
          let id: number = 0;
          listData.push(this.getBerrie(element.name).pipe(
            tap(res => {
              //console.log('First result', res)
              name = res.item.name,
              id = res.id
            })
            

            //listData.push();
      
            ));
          });
        let populatedData: IBerrie [] = [];
        return forkJoin(listData);
      }),catchError(this.handleError));
  }

  getBerrie(id:string):Observable<IBerrie>{
    const urlBerries:string = `https://pokeapi.co/api/v2/berry/${id}`;
    return this.httpClient.get<IBerrie>(urlBerries).pipe(catchError(this.handleError));
  }

  getItem(url:string){
    return this.httpClient.get<IBerrie>(url).pipe(catchError(this.handleError));
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
