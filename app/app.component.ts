import {Component, OnInit} from 'angular2/core';
import {Logger} from './common/services/logger.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello Angular2</h1>
  `,
  providers: [Logger]
})

export class AppComponent {

  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log('Alo!! Alo!!');
  }

}