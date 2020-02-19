import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('servicio spotify listo')
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD1UTs3ny10m9vnTAEzxlM8SszY1sjebRlRYhXU3ZLgSutpXab7A0xmV9BM_IvL5suIk6ascUXTzunkW6s'
    })

    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
             .subscribe(data => {
               console.log(data)
            })
  }
}
