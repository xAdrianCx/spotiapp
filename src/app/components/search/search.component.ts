import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists:any[] = [];
  loading: boolean;
  


  constructor(private spotify:SpotifyService) { 
    this.loading = false;
   }

  ngOnInit(): void {
  }

  searchArtists(termino:string){
    if (termino.length > 0){  
      this.loading = true;
      this.spotify.getArtists(termino)
                  .subscribe((data:any) =>{
                    this.artists = data
                    this.loading = false;
                  });}
      console.log(this.artists)
  }

}
