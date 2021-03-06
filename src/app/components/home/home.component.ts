import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = []
  loading: boolean;
  error: boolean;
  msgError: string;

  constructor(private spotify:SpotifyService) { 

    this.loading = true;
    this.error = false;


    this.spotify.getNewReleases().subscribe((data:any) => {
                    this.nuevasCanciones = data;
                    this.loading = false;
                  }, (errorServicio)=>{
                    this.loading = false;
                    this.error = true;
                    this.msgError = errorServicio.error.error.message;
                  });
    console.log(this.nuevasCanciones)
  }

  ngOnInit(): void {
  }

}
