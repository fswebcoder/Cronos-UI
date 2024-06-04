import { isPlatformBrowser } from '@angular/common';
import { Component, Input, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { default as MenuData } from "projects/ui-test/src/assets/data/menu.json";

export interface MenuItem {
  name?: string;
  icon?: string;
  children?: MenuItem[];
  routerLink?: string;
  href?: string;
}

@Component({
  selector: 'cronos-ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit  {

  @Input() active?: boolean;

  menu: MenuItem[] = MenuData.data
  private platformId: any =  inject(PLATFORM_ID);  

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
          this.scrollToActiveItem();
      }, 1);
    }
  }

  scrollToActiveItem() {
    
  }

}
