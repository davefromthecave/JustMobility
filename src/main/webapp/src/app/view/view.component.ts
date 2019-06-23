import {Component, Inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ViewService} from '../shared/view/view.service';
import {CustomerViewComponent} from './customer-view/customer-view.component';
import {Identity} from '@kiltprotocol/sdk-js';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  title = 'webapp';
  viewService: ViewService;

  @ViewChild('dynamic', {read: ViewContainerRef, static: true}) viewContainerRef: ViewContainerRef;

  constructor(@Inject(ViewService) viewService) {
    this.viewService = viewService;
  }

  ngOnInit() {
    this.viewService.setRootViewContainerRef(this.viewContainerRef);
    this.viewService.addDynamicComponent(CustomerViewComponent);

    const identity = Identity.buildFromMnemonic("page witness seven shoe miss icon custom crush teach usage evil few");
  }

  setDynamicComponent(component: any, variant?: string) {
    this.viewService.addDynamicComponent(component, variant);
  }
}
