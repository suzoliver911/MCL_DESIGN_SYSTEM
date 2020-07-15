import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import '!svg-sprite-loader!node_modules/@mayoclinic/icons/production/clipboard/clipboard.svg';
import '!svg-sprite-loader!node_modules/@mayoclinic/brand-logos/laboratories/mc-labs_black.svg';
import '!svg-sprite-loader!node_modules/@mayoclinic/brand-logos/laboratories/mc-labs_white.svg';
import '!svg-sprite-loader!node_modules/@fortawesome/fontawesome-free/svgs/solid/angle-double-right.svg';

// Feather icons
import '!svg-sprite-loader!node_modules/feather-icons/dist/icons/box.svg';
import '!svg-sprite-loader!node_modules/feather-icons/dist/icons/search.svg';
import '!svg-sprite-loader!node_modules/feather-icons/dist/icons/code.svg';
import '!svg-sprite-loader!node_modules/feather-icons/dist/icons/layers.svg';
import '!svg-sprite-loader!node_modules/feather-icons/dist/icons/arrow-up.svg';
import '!svg-sprite-loader!node_modules/feather-icons/dist/icons/arrow-down.svg';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
