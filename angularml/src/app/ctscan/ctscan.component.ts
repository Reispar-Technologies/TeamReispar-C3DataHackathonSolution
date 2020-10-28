import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctscan',
  templateUrl: './ctscan.component.html',
  styleUrls: ['./ctscan.component.css']
})
export class CtscanComponent implements OnInit {

  name: string;
  image:File;
  

  constructor() { }

  ngOnInit(): void {
  }

}
