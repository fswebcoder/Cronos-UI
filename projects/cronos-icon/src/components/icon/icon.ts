import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cron-icon',
  template: `
    <i class="material-icons" aria-hidden="true" [ngClass]="class">{{
      name
    }}</i>
  `,
  styles: [
    `
      @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: url(./assets/iconfont/MaterialIcons-Regular.eot);
        /* For IE6-8 */
        src: local('Material Icons'), local('MaterialIcons-Regular'),
          url(./assets/iconfont/MaterialIcons-Regular.woff2) format('woff2'),
          url(./assets/iconfont/MaterialIcons-Regular.woff) format('woff'),
          url(./assets/iconfont/MaterialIcons-Regular.ttf) format('truetype');
      }

      .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;

        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;

        -moz-osx-font-smoothing: grayscale;

        font-feature-settings: 'liga';
      }

      .material-icons.md-3 {
        font-size: 3px;
      }

      .material-icons.md-9 {
        font-size: 9px;
      }

      .material-icons.md-18 {
        font-size: 18px;
      }

      .material-icons.md-24 {
        font-size: 24px;
      }

      .material-icons.md-36 {
        font-size: 36px;
      }

      .material-icons.md-48 {
        font-size: 48px;
      }

      .material-icons.md-dark {
        color: rgba(0, 0, 0, 0.54);
      }

      .material-icons.md-dark.md-inactive {
        color: rgba(0, 0, 0, 0.26);
      }

      .material-icons.md-light {
        color: rgba(255, 255, 255, 1);
      }

      .material-icons.md-light.md-inactive {
        color: rgba(255, 255, 255, 0.3);
      }
    `,
  ],
})
export class IconComponent implements OnInit {
  @Input() name!: string;
  @Input() class?: string;
  @Input() size?: string;

  ngOnInit(): void {
    if (!this.name) {
      throw new Error('Missing "name" property for G Icon component');
    }
  }
}
