import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { views } from './app-nav-views';
import { MOBILE } from './services/constants';

import { BackandService } from '@backand/bkndangular2-sdk';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  showMonitor = (ENV === 'development' && !AOT &&
    ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
  );
  mobile = MOBILE;
  sideNavMode = MOBILE ? 'over' : 'side';
  views = views;
  res: string;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private backand: BackandService
  ) { }

  activateEvent(event) {
    if (ENV === 'development') {
      console.log('Activate Event:', event);
    }
  }

  deactivateEvent(event) {
    if (ENV === 'development') {
      console.log('Deactivate Event', event);
    }
  }

  getList(): void {
    this.backand.object.getList('items').then((res: any) => {
      this.res = 'Hello bkndangular2-sdk';
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.backand.init({
      appName: 'APP_NAME',
      anonymousToken: 'ANONYMOUS_TOKEN'
    });
    this.getList();
  }
}
