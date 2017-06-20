import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(meta: Meta, title: Title) { 

    title.setTitle('My about page');

    meta.addTags([ 
      {
        name: 'author', content: 'Gary Simon'
      },
      {
        name: 'keywords', content: 'kws'
      },
      {
        name: 'description', content: 'aaaaaaaaaaaaaaaaaaaaaa.'
      },
    ])

  }

  ngOnInit() {
  }

}
