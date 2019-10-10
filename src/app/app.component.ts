import { Component, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  template: `
    <span>woot</span>
    <button (click)="toggle()">Create overlay</button>

    <ng-template #template>
      <ng-container *ngIf="true">
        truthy template
      </ng-container>
    </ng-template>

    <ng-template #falsyTemplate>falsy template</ng-template>
  `
})
export class AppComponent {
  title = 'with-ivy';

  @ViewChild('template', { static: true }) listOptionsTemplate: TemplateRef<any>;

  constructor(private overlay: Overlay, private _viewContainerRef: ViewContainerRef) {

  }

  overlayReference = null;

  toggle() {
    if (!this.overlayReference) {
      const overlay = this.overlay.create();
      const optionsPortal = new TemplatePortal(this.listOptionsTemplate, this._viewContainerRef);
      overlay.attach(optionsPortal);
      this.overlayReference = overlay;
    } else {
      this.overlayReference.dispose();
      this.overlayReference = null;
    }
  }
}
