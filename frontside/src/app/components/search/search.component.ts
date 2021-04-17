import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Url } from 'src/app/models/url-model';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  urls!: Url[];
  pattern!: string;

  constructor(private urlsService: UrlsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPatternAndUrls();
  }

  getUrls() {
    this.urls = this.urlsService.getUrlsByPattern(this.pattern);
  }

  getPatternAndUrls() {
    this.route.paramMap.subscribe(params => {
      this.pattern = String(params.get('pattern'));
      this.getUrls();
    })
  }
}