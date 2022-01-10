import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private logger: NGXLogger) {}

  log(lvl) {
    switch (lvl) {
      case 0:
        this.logger.debug('My debug message');
        break;
      case 1:
        this.logger.info('My info message');
        break;
      case 2:
        this.logger.log('My log message');
        console.log('My console.info message');
        break;
      case 3:
        this.logger.warn('My warning message');
        break;
      case 4:
        this.logger.error('Now we got a problem');
        break;
    }
  }

}
