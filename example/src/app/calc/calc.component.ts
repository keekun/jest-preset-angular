import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
const image = require('assets/its_something.png');

import * as window from 'svgdom';
import * as SVGFactory from 'svg.js';

export const SVG = SVGFactory(window);

@Component({
  selector: 'app-calc',
  template: `
    <p
      class="a-default-class"
      [ngClass]="{
        'a-class': hasAClass
      }"
    >
      calc works!
      {{prop1}}
      another text node
      {{image}}
    </p>
  `,
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  @Input() hasAClass = false;
  prop1: number;
  image: string;
  observable$: Observable<string>;

  constructor() {
    this.init();
    this.prop1 = 1337;
    this.image = image;
  }

  ngOnInit() {
    console.log('SVG', SVG);
  }

  init() {
    return 'Imma method';
  }
}
