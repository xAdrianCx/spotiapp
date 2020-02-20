import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('servicio spotify listo')
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCQh2Jq7SzEJWo4h1GTTqmfSHSLVcqSPbGiqglfTvdSrNYZLR7Uv0oToFi2j-sa7qvlq7gO7J7O3Rk7R7k'
    })

    return this.http.get(url, {headers});

  }

  getNewReleases(){    
    return this.getQuery('browse/new-releases?limit=20')
              .pipe(map(data => data['albums'].items))
  }

  getArtist(termino:string){
    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=15`)
                      .pipe(map(data =>  data['artists'].items))
  }
}
