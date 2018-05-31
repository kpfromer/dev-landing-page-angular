import {Component, HostListener, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Kyle Pfromer');
  }

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background-color': '#FAFAFA'
    };

    this.myParams = {
      particles: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        },
        color: {
          value: '#0277BD'
        },

      },
      retina_detect: true
    };
  }
}
