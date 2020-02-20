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
      'Authorization': 'Bearer BQCY0iNWrQ7bBiIQZrNNpVW8ARSCMtrwXC5_yDZ9TeU3Hc6NuwaRgTL90E8T4xDFI8asHQXW_vES77BMbiw'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtist(termino:string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCY0iNWrQ7bBiIQZrNNpVW8ARSCMtrwXC5_yDZ9TeU3Hc6NuwaRgTL90E8T4xDFI8asHQXW_vES77BMbiw'
    })

    return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=15`, {headers});
  }
}
