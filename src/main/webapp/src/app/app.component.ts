import {Component, OnInit, ViewChild} from '@angular/core';
import {faBars, faCog, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {CustomerInformation} from './shared/customerinformation/customer-information';
import {CustomerInformationService} from './shared/customerinformation/customer-information.service';
import {ViewComponent} from './view/view.component';
import {ProfileViewComponent} from './view/profile-view/profile-view.component';
import {MatDrawer} from '@angular/material';
import {SettingsViewComponent} from './view/settings-view/settings-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp';
  menuIcon = faBars;
  backIcon = faHome;
  settingsIcon = faCog;
  profileIcon = faUser;

  customerInformation: CustomerInformation;
  customerId = 1;

  @ViewChild('view', {read: ViewComponent, static: true}) viewComponent: ViewComponent;
  @ViewChild('drawer', {read: MatDrawer, static: true}) drawer: MatDrawer;

  constructor(private customerInformationService: CustomerInformationService) { }

  ngOnInit(): void {
    this.loadCustomerInformation();
  }

  loadCustomerInformation() {
    this.customerInformationService.getCustomerInformation(this.customerId).subscribe(customerInformation => {
      this.customerInformation = customerInformation;
    });
  }

  goHome() {
    this.viewComponent.ngOnInit();
  }

  loadProfile() {
    this.viewComponent.setDynamicComponent(ProfileViewComponent);
    this.drawer.close();
  }

  loadSettings() {
    this.viewComponent.setDynamicComponent(SettingsViewComponent);
    this.drawer.close();
  }
}
