import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { Logger } from './common/services/logger.service';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS, Logger]);
