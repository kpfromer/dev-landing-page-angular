import {Directive, ElementRef, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import TypeIt from 'typeit';

@Directive({
  selector: '[appTyped]'
})
export class TypedDirective implements OnInit, OnDestroy {

  @Input() options: object;

  typed: TypeIt;

  constructor(@Inject(ElementRef) private _elemRef: ElementRef) {
  }

  ngOnInit() {
    console.log(this.options);
    this.typed = new TypeIt(this._elemRef.nativeElement, this.options);
  }

  ngOnDestroy() {
    this.typed.destroy();
  }


}
