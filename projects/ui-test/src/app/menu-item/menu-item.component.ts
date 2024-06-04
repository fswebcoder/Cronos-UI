import { Component, Input, inject } from '@angular/core';
import { MenuItem } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: '[app-menuitem]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  @Input() item: MenuItem;
  @Input() root: boolean = true;

  private router: Router = inject(Router);

  isActiveRootMenuItem(menuitem: MenuItem): boolean {
    const url = this.router.url.split('#')[0];
    return menuitem.children && !menuitem.children.some((item) => item.routerLink === `${url}` || (item.children && item.children.some((it) => it.routerLink === `${url}`)));
}

}
