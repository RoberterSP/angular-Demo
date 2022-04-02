import { AfterViewInit, Directive, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

// ViewContainerRef: 将一个或者多个的容器附着到组件的容器上面，相当于一个父容器

@Directive({
  selector: '[adHost]',
  host: {
    '(click)': 'handleClick($event)'
  }
})
export class AdDirective implements OnInit, AfterViewInit {
  @Input() defaultValue = '';
  constructor(
    private templateRef: TemplateRef<any>,
    public viewContainerRef: ViewContainerRef
    ) { }
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.defaultValue);
  }
  handleClick(e: any) {
    console.log(e, '##$#$#$#$#$#')
  }
  ngOnInit(): void {
    console.log(this.defaultValue, '#####');

  }
  ngAfterViewInit(): void {
    console.log(this.templateRef)
  }
}