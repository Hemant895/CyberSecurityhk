import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY:string="f8d7585ee63643c3a67cba5eba97472e";

  constructor(private http: HttpClient) {}
  
    
  

  //You can then inject the HttpClient service as a dependency of an application class
  
  public getNews()
  {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f8d7585ee63643c3a67cba5eba97472e');
  }

}
