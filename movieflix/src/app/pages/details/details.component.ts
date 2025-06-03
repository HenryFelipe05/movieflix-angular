import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor(private service: MovieApiService, private router: ActivatedRoute, private sanitizer: DomSanitizer) {}

  media: any;
  trailers: any = [];
  cast: any = [];

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    let mediaType = this.router.snapshot.paramMap.get('type');

    this.getMedia(mediaType, id);
  }

  getMedia(mediaType: any, id: any) {
    this.service.mediaDetails(mediaType, id).subscribe((result) => {
      this.media = result;
    });

    this.service.mediaTrailer(mediaType, id).subscribe((result) => {
      this.trailers = result.results;
    });

    this.service.mediaCast(mediaType, id).subscribe((result) => {
      this.cast = result.cast;
    });
  }
}
