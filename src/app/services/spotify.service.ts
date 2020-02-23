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
      'Authorization': 'Bearer BQAQtgSDDz0XHBLRe_p3N4TdCXR2gU5I4WSKLZtQ4BAL_QPN_VSQvgxphhuW2pwAeY5vmB1gggFv2eSfXCA'
    })

    return this.http.get(url, {headers});

  }

  getNewReleases(){    
    return this.getQuery('browse/new-releases?limit=20')
              .pipe(map(data => data['albums'].items));
  }

  getArtists(termino:string){
    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=15`)
                      .pipe(map(data =>  data['artists'].items));
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
                .pipe(map(data =>  data['tracks']))
  }
}
