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
      'Authorization': 'Bearer BQCq0VbZwhV8mOQindkKl_risebRyDYqxDeOoLn7Q6FPDUcCYvh_-k7_1tf97oBkAv5eHEz0V02O3_bhYNY'
    })

    return this.http.get(url, {headers});

  }

  getNewReleases(){    
    return this.getQuery('browse/new-releases?limit=20')
              .pipe(map(data => data['albums'].items))
  }

  getArtists(termino:string){
    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=15`)
                      .pipe(map(data =>  data['artists'].items))
  }
}
