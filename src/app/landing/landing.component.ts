import { SharedDataService } from './../shared-data.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private data: SharedDataService) {}
  genreList: any = [];
  movieList: any = [];
  IMG_URL = 'https://image.tmdb.org/t/p/w500';
  ngOnInit(): void {
    this.data.getGenreList().subscribe((succ) => {
      console.log(succ);
      this.genreList = succ;
    });

    this.data.getMovieList(28).subscribe((succ: any) => {
      console.log(succ);
      this.movieList = succ.results;
      console.log(this.movieList);
    });
  }

  customOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    // slides:[this.movieList],
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: true
  };

  getMovieById(ind) {
    this.data.getMovieList(ind).subscribe((succ: any) => {
      console.log(succ);
      this.movieList = succ.results;
      console.log(this.movieList);
    });
  }
}
