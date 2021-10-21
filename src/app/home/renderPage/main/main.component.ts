import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import { RenderService, RenderPage } from '../service/render-page.service';
import { ThirdComponent } from '../third/third.component';

@Component({
  providers: [RenderService],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  allChildrenComponents = {
    [RenderPage.First]: FirstComponent,
    [RenderPage.Second]: SecondComponent,
    [RenderPage.Third]: ThirdComponent,

  }
  sub!: Subscription;
  constructor(
    private resolver: ComponentFactoryResolver,
    private service: RenderService,
  ) { }
  @ViewChild('hostPage', { read: ViewContainerRef, static: true })
  hostPage!: ViewContainerRef;


  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.sub = this.service.stepIndexUpdate$.subscribe(r => {
      if (r) {
        this.renderpage(r)
      }
    })
  }
  next() {
    this.renderpage(RenderPage.Second)

  }
  ngOnDestroy() {
    if(this.sub) {
      this.sub.unsubscribe()
    }
  }
  back() {
    this.renderpage(RenderPage.First)
  }
  renderpage(page:RenderPage) {
    const target = this.allChildrenComponents[page]
    const component = this.resolver.resolveComponentFactory(target)
    this.hostPage.clear()
    this.hostPage.createComponent(component)
  }

}
