import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(private http: HttpClient) { }


getGenreList(){

  return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41');
}

getMovieList(id){

  return this.http.get('https://api.themoviedb.org/3/genre/'+id+'/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41');

}


}
