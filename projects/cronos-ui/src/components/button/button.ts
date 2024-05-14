import { Component, HostBinding, Input } from "@angular/core";
import { ButtonPosition } from "./types/button.position";

@Component({
  selector: "cronos-ui-button",
  template: `
    <button
      class="cronos-btn"
      [ngClass]="buttonClass()"
      [attr.type]="type"
      [attr.aria-label]="ariaLabel"
      [disabled]="disabled"
    >
      <cron-icon
        *ngIf="showIcon "
        class="cron-icon"
        name="{{ icon }}"
      ></cron-icon>
      <span *ngIf="!isRounded"
        >{{ label.charAt(0).toUpperCase() + label.slice(1).toLowerCase() }}
      </span>
    </button>
  `,
})
export class ButtonComponent {
  @Input() label: string = "Click me";
  @Input() showIcon: boolean = false;
  @Input() iconPosition: ButtonPosition = "left";
  @Input() disabled: boolean = false;
  @Input() type: "button" | "submit" | "reset" = "button";
  @Input() size: "small" | "medium" | "large" = "medium";
  @Input() icon: string = "";
  @Input() severity:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger" = "primary";
  @Input() ariaLabel: string | undefined;
  @Input() isRounded: boolean = false;

  @HostBinding("attr.showicon")
  get iconShow(): boolean {
    return this.showIcon ?? false;
  }

  @HostBinding("attr.iconPosition")
  get position(): ButtonPosition {
    return this.showIcon ? this.iconPosition : null;
  }

  @HostBinding("button.attr.size")
  get sizeButton(): "small" | "medium" | "large" {
    return this.size;
  }


  OnInit() {
    if (!this.icon) {
      throw new Error("Icon name is required");
    }
  }

  buttonClass() {
    return {
      "btn-primary": this.severity === "primary",
      "btn-secondary": this.severity === "secondary",
      "btn-success": this.severity === "success",
      "btn-info": this.severity === "info",
      "btn-warning": this.severity === "warning",
      "btn-danger": this.severity === "danger",
      "btn-disabled": this.disabled,
      "btn-small": this.size === "small",
      "btn-medium": this.size === "medium",
      "btn-large": this.size === "large",
      "btn-rounded": this.isRounded,
    };
  }
}
