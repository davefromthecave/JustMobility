import {ComponentFactoryResolver, Inject, Injectable, ViewContainerRef} from '@angular/core';
import {CustomerViewComponent} from '../../view/customer-view/customer-view.component';
import {RideViewComponent} from '../../view/ride-view/ride-view.component';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  factoryResolver: ComponentFactoryResolver;
  rootViewContainer: ViewContainerRef;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent(component: any, variant?: string) {
    this.rootViewContainer.clear();
    const factory = this.factoryResolver
      .resolveComponentFactory(component);
    const componentObject = factory
      .create(this.rootViewContainer.parentInjector);

    let instance;
    switch (componentObject.instance['type']) {
      case 'CustomerViewComponent':
        instance = componentObject.instance as CustomerViewComponent;
        instance.menuButtonClick.subscribe($event => {
          this.addDynamicComponent($event.component, $event.variant);
        });
        break;
      case 'RideViewComponent':
        instance = componentObject.instance as RideViewComponent;
        instance.variant = variant;
        break;
    }

    this.rootViewContainer.insert(componentObject.hostView);
  }
}
