import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('arrowDown', [
      state('inactive', style({
        opacity: 0,
      })),
      state('active',   style({
        opacity: 1
      })),
      transition('inactive => active', animate('250ms ease-in')),
      transition('active => inactive', animate('250ms ease-out'))
    ])
  ]
})
export class LandingComponent implements OnInit {

  arrowDown = 'active';

  typedOptions = {
    strings: ['Angular Lover', 'Express Tinker', 'Fullstack Developer'],
    breakLines: false
  };

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event.target'])
  onWindowScroll(window) {
    this.arrowDown = window.documentElement.scrollTop < 10 ? 'active' : 'inactive';
  }

}
