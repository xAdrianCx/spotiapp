import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists:any[] = [];

  constructor(private spotify:SpotifyService) { }

  ngOnInit(): void {
  }

  searchArtist(termino:string){
    console.log(termino)
    this.spotify.getArtist(termino)
                .subscribe((data:any) =>{
                  this.artists = data.artists.items
                  console.log(data.artists.items)
                })
  }

}
