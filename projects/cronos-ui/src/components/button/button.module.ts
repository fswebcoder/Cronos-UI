import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button";
import { IconModule } from "@cronos/icons/icon";

@NgModule({
    imports: [CommonModule, IconModule],
    exports: [ ButtonComponent],
    declarations: [ButtonComponent]
})
export class ButtonModule {}