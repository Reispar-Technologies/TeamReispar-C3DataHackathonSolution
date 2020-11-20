import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-covid-impact',
  templateUrl: './covid-impact.component.html',
  styleUrls: ['./covid-impact.component.css']
})
export class CovidImpactComponent implements OnInit {

  projectUrl = "https://datastudio.google.com/embed/reporting/fe21b355-2f92-4dd2-91ea-a25d82accd37/page/Pq7mB"
  urlSafe;

  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit(): void {this.updateVideoUrl()}

  updateVideoUrl() {
  this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.projectUrl);}

}
