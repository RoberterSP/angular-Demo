import { Directive, ViewContainerRef } from '@angular/core';

// ViewContainerRef: 将一个或者多个的容器附着到组件的容器上面，相当于一个父容器

@Directive({
  selector: '[adHost]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}