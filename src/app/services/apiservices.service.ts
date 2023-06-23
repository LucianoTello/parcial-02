import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  private urlapi = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

  constructor(private http : HttpClient) { }

  public getData() : Observable <any>{

    return this.http.get(this.urlapi);
  }

  public getcocktails(parametro : string) : Observable <any>{
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g='+ parametro;//Cocktail_glass';
    return this.http.get(url);
  }

  public getcocktailsbyname(parametro : string) : Observable <any>{
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ parametro;//Cocktail_glass';
    return this.http.get(url);
  }

  getcocktailsbyname2() : Observable <any>{
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    return this.http.get(url);
  }

}
