import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCursor]'
})
export class CursorDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.cursor = 'pointer';
  }

}
