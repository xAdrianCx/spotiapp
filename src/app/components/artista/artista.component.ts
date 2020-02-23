import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {}
  topTracks: any = []
  loadingArtist:boolean;

  constructor( private router:ActivatedRoute,
               private spotify: SpotifyService) { 

    this.loadingArtist = true;
    this.artista = {
      'external_urls':{
        'spotify': ''
      }
    }
    this.router.params.subscribe(params =>{
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
      this.loadingArtist = false;
    })
  }

  ngOnInit(): void {
  }

  getArtista(id:string){
    this.spotify.getArtist(id).subscribe(artista =>{
      this.artista = artista;
      console.log(this.artista)
    })
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(topTracks =>{
      this.topTracks = topTracks;
      console.log(this.topTracks)
    })
  }

}
