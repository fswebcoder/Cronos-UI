import { Component } from "@angular/core";

@Component({
    selector: 'cronos-ui-main',
    template: `
        <div class="layout-wrapper">
            <cronos-ui-topbar></cronos-ui-topbar>
            <cronos-ui-menu></cronos-ui-menu>       
        </div>
    `
})
export class MainComponent {
    
}
